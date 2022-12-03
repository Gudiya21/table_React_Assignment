import React,{ useState } from 'react';
function App(){
    const values = [1,2,3,4,5,6,6,7,8,9,10]
    const [table,setTable]=useState(0)
    const [list,setList]=useState([])
    const loopElement=()=>{
      let newList=[]
      for(let i=1;i<=10;i++){
       newList.push(`${table} X ${i} = ${table*i}`)
        console.log(newList)
      }
      setList(newList)
      console.log(list)
    }

    return (
    <div>
      <input type="text" placeholder='enter a number' onChange={(e)=>{
        setTable(e.target.value)
      }}/>
     <button onClick={loopElement}>Click</button>
     
      {
        list.map((item,index)=>{
          return(
            <div >
              <h4>{item}</h4>
              
            </div>
          )
        })
      }

      
      
    </div>
  )
}
export default App