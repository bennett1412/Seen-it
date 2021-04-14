const api_key = '379b2dc7f7c0b942aa689b04aac1fcf6';
//function to get the values from genre
$(document).ready(() =>{
    $('#searchForm').on('submit',(e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
    console.log("hello");
});

//logic for getting the values from the checkboxes
glist =  {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
}
str = '';
const gen = document.getElementById('generate');
gen.addEventListener("click",function(){
    let checkboxes = document.getElementsByName('genre');
    for (let checkbox of checkboxes) {
        if(checkbox.checked){
        console.log("working loop");
        str += glist.genres.find(x => x.name == checkbox.value).id + '%2C';
        console.log(glist.genres.find(x => x.name == checkbox.value).id);
        }
    }
    console.log(str);
    getMovies(str);
});

//function to get the values from genre
// $(document).ready(() =>{
//     $('#searchForm').on('submit',(e) => {
//         let searchText = $('#searchText').val();
//         getMovies(searchText);
//         e.preventDefault();
//     });
//     console.log("hello");
// });

// str = 'https://api.themoviedb.org/3/search/movie?api_key=379b2dc7f7c0b942aa689b04aac1fcf6&language=en-US&query=$('searchText')&page=1&include_adult=false';
function getMovies(str){
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${str}`)
    .then((response) => {
        console.log(response);
        let movies = response.data.results;
        let output = '';
        $.each(movies, (index, movie) =>{
            output += `
            <div class="movtile col-md-3">
            <div class="well text-center">
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
            <h5 class="movieTitle" data-toggle="tooltip" data-placement="bottom" title="${movie.title}">${movie.title}</h5>
            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary details" href="#">Movie Details</a>
            </div>
            </div>
            `;
        });
        $('#movies').html(output);
    })
    .catch((err) => {
        console.log(err);
    });
}

// document.getElementById("random").addEventListener("click", function (){
//     const characters = 'abcdefghijklmnopqrstuvwxyz';
//     let c = characters[Math.floor(Math.random()*25)];
//     let year = Math.floor(Math.random() * 30 + 1990);
//     console.log(c);
//     axios.get('http://www.omdbapi.com/?apikey=3e7e5973&t='+ c +'&y=' + year)
//     .then((response) => {
//         console.log(response);
//         console.log(response.data.Title);
//         let movie = response.data;
//         let output = '';
//         output += `
//             <div class="col-md-3">
//             <div class="well text-center">
//             <img src="${movie.Poster}">
//             <h5>${movie.Title}</h5>
//             <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//             </div>
//             </div>
//             `;
//             $('#movies').html(output);
//     })
    
//     .catch((err) => {
//         console.log(err);
//     });
    
    
// });