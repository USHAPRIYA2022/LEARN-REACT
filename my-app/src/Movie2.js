import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";

const App = () =>
{
    const [data,setData] = useState([]);


    // USE EFFECT HOOK IS USED AS LIKE LIFE CYCLE METHODS TO ESTABLSH SERVER SIDE DATA FETCH;

useEffect( () =>{
    axios
    .get('http://localhost:3004/movies')
    .then(result=> setData(result.data)); 
},[]); 

return(
    <React.Fragment>

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
            
             {data.map(movie => (
            <tr  key={movie._id}>
                        
            <td> {movie.title}</td>
            <td> {movie.genre.name}</td>
            <td> {movie.numberInStock}</td>                
            <td>{movie.dailyRentalRate} </td>
       </tr>
             
        ) )} </tbody>
        </table>
        

    </React.Fragment>
)

}
export default App;