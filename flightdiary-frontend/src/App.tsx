import { useEffect, useState } from "react"
import { Diaries } from "./types"
import axios from "axios"

import AddDiary from "./components/common/addDiary"
import RenderDiaries from "./components/common/renderDiaries"
import Footer from "./components/common/Footer"


const App = () => {
  const [diaries, setDiaries] = useState<Diaries[]>([])

  useEffect(() => {
    axios.get<Diaries[]>("http://localhost:3000/api/diaries").then((res) => {
      setDiaries(res.data)
    })
  },[])
 

  return (
    <div className="flex flex-col justify-between min-h-screen" >
      <div>
        <h1 className="text-4xl font-bold">Travel Diaries</h1>

        <p className="mt-4">
          Welcome to your travel diaries! Here you can see a list of your recent
          travel diaries.Without forgetting on Adding a new one!
        </p>
      </div>
      <AddDiary setDiaries={setDiaries} />
      <RenderDiaries diaries={diaries} />
      
      <Footer />
    </div>
  )
}


export default App