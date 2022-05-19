import React from "react";
// components

const Search=(props)=> {

 
    return (

        <div style={{width: '80%',margin : '10px auto'}}>
          <input type="text" placeholder="Enter Something" onChange={props.inputChange}></input>
          
        </div>
        

    )
        }



export default Search;
