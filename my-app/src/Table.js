import React from "react";

function Table (props)
{
    return(
        <div>
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
               props.movies.map(movie => (

                   <tr  key={movie._id}>
                       
                   <td> {movie.title}</td>
                   <td> {movie.genre.name}</td>
                   <td> {movie.numberInStock}</td>                
                   <td>{movie.dailyRentalRate} </td>
                   <td><button type="button" className="btn btn-primary" onClick={()=>props.clickMe(movie)}>Delete</button> </td> 
              </tr>


               ))
           }
           
           
           </tbody>
        </table> 
        </div>

    )
}

export default Table;