import { useState,useEffect } from 'react'
import './App.css'

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

<div className="timeline">

    {data? data.map((item) => (

      <div className={item.isLeft?"container left":"container right"}>
        <div className="content">
          <h2>{item.text}</h2>
          <p>....</p>
        </div>
      </div>

    ))
      :""}

</div>

  )
}
/*<ul>

{data? data.map((item) => (
    <li id={item._id} key={item._id}>
      {item.text}
    </li>
  ))
  :<li>Add new One</li>}
  </ul> */
export default App
