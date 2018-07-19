import apiService from './api.service';

let MovieService = class MovieService {
	constructor() {
	}
    GenreMovie=(genreId, page)=> {
       
       return  fetch(apiService.getMoviesOfGenre(genreId, page))
         .then((response) => response.json())
         .then((responseJson) => {
          return responseJson;
          })
          .catch((error) =>{
            console.error(error);
          }); 
    }
    
	Searchmovie=(param,page)=> {
      
        return  fetch(apiService.getMovieSearch(param, page))
        .then((response) => response.json())
        .then((responseJson) => {
         return responseJson;
         })
         .catch((error) =>{
           console.error(error);
         });
    }

    Image = link => {
        return fetch(apiService.getImage(link))
        .then((response) => response.json())
        .then((responseJson) => {
   
         return responseJson;
         })
         .catch((error) =>{
           console.error(error);
         }); 
    }
    
    Genres=()=>{
        return fetch(apiService.getGenres())
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .catch((error) => {
                console.error(error);
              
            }); 
    }

    MovieDetail = id => {
        return fetch(apiService.getMovieDetail(id))
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
            console.error(error);
           
        });
    }
   
    MovieCast = id => {
        return fetch(apiService.getMovieCast(id))
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
            console.error(error);
           
        });
    }

    PopleCredit = id => {
        return fetch(apiService.getPeopleCredits(id))
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
            console.error(error);
           
        });
    }

    Person = person_id => {
        return fetch(apiService.getPerson(person_id))
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
            console.error(error);
           
        });
    }

    SearchPerson=(param,page)=> {
            return  fetch(apiService.getPersonSearch(param, page))
            .then((response) => response.json())
            .then((responseJson) => {
             return responseJson;
             })
             .catch((error) =>{
               console.error(error);
             });
        }
};

   

const movieService = new MovieService();
export default movieService;