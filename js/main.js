'use strict';

const API_KEY = '29bb47b7552ec502eb87cebfbc77f766';
const API_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

$(document).ready(function () {

    // Events
    $('.search__btn').click(() => {
        getMovie()
    })

    $('.search__field').keypress((e) => {
        if (e.keyCode === 13)
            getMovie()
    })

    // Functions
    async function getMovie() {
        let query = $('.search__field').val()

        $('body').addClass('loading')

        if (query !== '') {
            $('.movie').remove()

            let url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`

            try {
                let response = await fetch(url)
                let res = await response.json()
                console.log(res)

                if (res.results.length === 0) {
                    alert('No movies found')
                } else {
                    res.results.forEach((movie) => {
                        if (movie.poster_path !== null)
                            $('.movies').append(drawMovie(movie))
                    })
                }

                $('body').removeClass('loading')

            } catch (e) {
                alert('error!')
            }
        }

        /*

        fetch(url)
        .then(data => data.json()
         .then(res => {
       if (res.results.length === 0) {
           alert('No movies found')
        } else {
           res.results.forEach((movie) => {
               (movie.poster_pass !== null)
               $('body').append(drawMovie(movie))
          })
        }
        $('body').removeClass('loading')
       }))
 

                   $.ajax({
                       url: `${API_URL}/search/movie`,
                       type: 'GET',
                       dataType: 'json',
                       data: {
                           api_key: API_KEY,
                           query: query
                       }
                   }).then((res) => {
                       if (res.results.length === 0) {
                           alert('No movies found')
                       } else {
                           res.results.forEach((movie) => {
                               (movie.poster_pass !== null)
                               $('body').append(drawMovie(movie))
                           })
                       }
       
                       $('body').removeClass('loading')
                   })
                   */
    }

    function drawMovie(movie) {

        let movieDom = `
        <div class="movie">
         <div class="roof"></div>
                       <img src="${IMG_URL + movie.poster_path}" alt="">
                       <h2 class="movie__title">${movie.title}</h2>

                       <div class="fo">
                        <h3 class="fo__title">${movie.title}</h3>
                        <h3 class="fo__release"><b>Release date: </b>${movie.release_date}</h3>
                         <h3 class="fo__rating"><b>Rating: </b>${movie.vote_average}</h3>
                       <p>${movie.overview}</p>
                       </div>

                    </div>`
        return movieDom
    }

    function getRewies(id) {
        $.ajax({
            url: `${API_URL0}/movie${id}/rewiews`,
            type: 'GET',
            dataType: 'json',
            data: {
                api_key: APY_KEY
            }
        })
    }
})
