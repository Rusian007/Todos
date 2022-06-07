import { useState,useEffect } from 'react'
import './App.css'
import TopBar from './components/topbar'

function App() {
  const [data, setData] = useState(null)

  const fetchData = async  () => {
          const response = await fetch("http://127.0.0.1:3001/api/todo/get")
          const data = await response.json()
          setData(data.TodoList)
    }

  const submitLogic= async (e)=>{
      var theHiddenDiv = document.getElementById("hiddenDiv")
      theHiddenDiv.classList.add("hidden");


      var thevalue = document.getElementById("theAddListInput")
      if(thevalue.value){
        console.log(thevalue.value);
        //send request with this value
        //Clean the input value
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: thevalue.value })
      }
      const response = await fetch("http://127.0.0.1:3001/api/todo/create",requestOptions)
      const ourdata = await response.json()
      thevalue.value = ""
      fetchData()

      }
      else{
        alert("You did not Enter anything 😞 ")
      }

    }

useEffect(() => {
  fetchData()
},[])

  return (
<>
<TopBar valueSubmitCallBack={submitLogic}/>
<div className="timeline">

    {data? data.map((item) => (

      <div key={item._id} id={item._id} className={item.isLeft?"container left":"container right"}>
        <div className="content">
          <h2>{item.text}</h2>
          <p>....</p>
        </div>
      </div>

    ))
      :""}

</div>
</>
  )
}

export default App
