import React from 'react'

function Todolist({list,deleteHandler,strikeHandler,iscompleted}) {
  return (
    <div >
    
    <center>
      {
        list && list.map((item,index)=>{
            return(
          
              <>
              <div style={{
                display: "flex", 
                alignItems: "center", 
                height: "100%", 
                width: "100%",
                justifyContent: "center",
              }}>
                <input type="checkbox" onClick={strikeHandler}style={{height: "auto" }} />
                
                <p  style={{margin: "10px 10px", height: "auto",}} className={iscompleted?'complete':" " }>{item}</p>
                <button onClick={()=>deleteHandler(index)}style={{display: "inline-block", height: "auto" }}>delete</button>
              </div>

           
             </>
              
            )

        })
       }
       </center>
     
    </div>
  )
}

export default Todolist
