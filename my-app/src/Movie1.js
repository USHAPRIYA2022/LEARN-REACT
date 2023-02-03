import React from "react";
import { Component } from "react";
/* import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
 */
import Table from "./Table";
import axios from "axios";

class Movie extends Component
{

    state = {

        // movies : getMovies()

        movies :[]
    }
    componentDidMount()
    {
       /* fetch("http://localhost:3004/movies")
        .then(res =>res.json())
       // .then(res=>console.log(res))
        .then(res=> this.setState({movies:res})); */
        
        
        //USING AXIOS API 

       axios.get(` http://localhost:3004/movies`)
        .then(res =>
                  {   const movie = res.data;
                     // console.log(movie)
                      this.setState({movies:movie})
                  }
             )
    }
    handleOnDelete = (movie) =>
    {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies:movies})
    }
render()
{ const {length:count}=this.state.movies
if(count===0 )

return  <div className="container" ><p>There are no movies in the database</p></div> ;

    return(
        <React.Fragment>
                <Table clickMe={this.handleOnDelete} movies={this.state.movies}/>
           
        
        <div >
                  
                <p>Showing {count} movies in the Table</p>
        
     <table className="table">
           
            <thead>
                <tr>
                     <th > Title </th>
                     <th > Genre</th>
                     <th >Stock </th>
                     <th >Rate</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.movies.map(movie => (

                    <tr  key={movie._id}>
                        
                    <td> {movie.title}</td>
                    <td> {movie.genre.name}</td>
                    <td> {movie.numberInStock}</td>                
                    <td>{movie.dailyRentalRate} </td>
                    <td><button type="button" className="btn btn-primary" onClick={()=>this.handleOnDelete (movie)}>Delete</button> </td> 
               </tr>
                

                ))
            }
            
            
            </tbody>
         </table>


        </div>
        </React.Fragment>
        
    )
    
}

}
export default Movie;