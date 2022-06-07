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

useEffect(() => {
  fetchData()
},[])

  return (
<>
<TopBar />
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
