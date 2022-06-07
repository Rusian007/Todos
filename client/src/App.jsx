import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData(){
    const url = "http://localhost:3001/api";
    const response = await fetch(url);
    const datathis = response.json();

    datathis.then((res)=>{
      setData(res.message);
    })

  }
  getData();
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
    </div>
  )
}

export default App
