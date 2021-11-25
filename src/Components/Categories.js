import React from 'react'
const Categories=({categories})=>{
    console.log("cat:",categories.name)
     return(
         <div>
              <img src={"http://63.142.251.101:3000/"+categories.imageUrl} alt='category' className='logo'></img>
            <p>{categories.name}</p>
         </div>
                   
                   )
//     cusinie_lists: [{id: 1, name: "Indian ", imageUrl: "assets/cuisine/1630479236843__Indian.svg"},…]
// 0: {id: 1, name: "Indian ", imageUrl: "assets/cuisine/1630479236843__Indian.svg"}
// id: 1
// imageUrl: "assets/cuisine/1630479236843__Indian.svg"
// name: "Indian "

}

export default Categories