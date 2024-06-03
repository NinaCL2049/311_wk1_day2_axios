const axios = require('axios')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios.get(url)
  // console.log(axios(url))
  // .then(function (response) {
    
    // return response
  // })
}

// discoverMovie()


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios.get(url)
  .then(function(response) {
    return response.data;
    // console.log(response.data);

  })
  
  // axios.get(url)
  // code here
}

getMovieById(500)


const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return axios.get(url)
  .then(function(response) {
    return response.data;
  

  })
  .catch(error => {
    return error.response.status;
    // console.log(error.response.status);
  })
  
  // code here
}
// console.log(error.response.status)



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}

// from tmdb documentation:

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/343611?api_key=7a002ed6c2c1bee5ffc5c6a3d0d96f77'
// npm test index.test.js