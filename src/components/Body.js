import React from "react";
const Body=(props)=>{
  const pstyles={
       backgroundColor:'blue',
   }
    return(
       <div>
             { /* inline styling  */ }
            <p style={pstyles}>{props.name}</p>
       </div>
    )
    

}
export default Body
