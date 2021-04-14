const api_key = '379b2dc7f7c0b942aa689b04aac1fcf6';
console.log("hello")
const randomiser = document.getElementById('randomiser');
randomiser.addEventListener('click',function(){
    const movID = Math.floor(Math.random()*801635);
    console.log(movID);
    getMovDets(movID);
});
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
function getMovDets(movID){
    axios.get(`https://api.themoviedb.org/3/movie/${movID}?api_key=${api_key}&language=en-US`)
    .then((response) => {
        console.log(response);
        let movie = response.data;

        if(movie.adult == true || movie.poster_path == null)
        getMovDets(Math.floor(Math.random()*801635));
        else{
        let output = '';
        output += `
        <div class="">
        <div class="rmovie">
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
        <h5 class="movieTitle" data-toggle="tooltip" data-placement="bottom" title="${movie.title}">${movie.title}</h5>
        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary details" href="#">Movie Details</a>
        </div>
        </div>
        `;
        $('#rmovie').html(output);
        }
    })
    .catch((err) => {
        getMovDets(Math.floor(Math.random()*801635));
        console.log(err);
    });
}