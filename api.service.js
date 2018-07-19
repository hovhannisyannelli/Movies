let movielist = {};
let ApiService = class ApiService {
  
	constructor() {
		this.apiProtocol = 'https://';
        this.apiHost = 'api.themoviedb.org/';
        this.apiKey = '6f3e2f83e8e5ad2a26723118457eba11';
        this.version ='3/'   
	}  

	getapiLocation=()=> {
		return this.apiHost;
	}
   
    getUrl=(route)=>
    {
        const link = this.apiProtocol + this.apiHost + this.version + route  +  '&api_key=' + this.apiKey;
        return link
        
      
    } 
    
     getGenres=()=>{
        return this.getUrl('genre/movie/list?language=en-US')
     }

    getMoviesOfGenre = (genreid, page) =>  {
       
         return this.getUrl( 'discover/movie?with_genres=' + genreid + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+ page)
    }

    getMovieSearch=(param, page) =>{
        
        return this.getUrl('search/movie?language=en-US&query=' + param + '&include_adult=false&page=' + page)   
    }
    
    getMovieDetail= movie_id => {
        return this.getUrl('movie/'+ movie_id +'?language=en-US')
    }

    getImage = link => {
        return 'https://image.tmdb.org/t/p/w500'+ link;
    } 
   
    getPerson =(person_id) => {
       return this.getUrl('person/' + person_id + '?language=en-US')
    }
    getPersonSearch = (param, page) => {
        return this.getUrl('search/person?language=en-US&query=' + param + '&page=' + page) 
    }
    getMovieCast = movie_id => {
        return this.getUrl ('movie/'+ movie_id +'/credits?language=en-US')
    }
    getPeopleCredits = person_id => {
        return this.getUrl ('person/'+ person_id +'/movie_credits?language=en-US&include_adult=false')
    }
}
const apiService = new ApiService();
export default apiService;

