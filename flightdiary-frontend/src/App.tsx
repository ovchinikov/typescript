import { useEffect, useState } from "react"
import { Diaries, Diary } from "./types"
import axios from "axios"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"


const App = () => {
  const [diaries, setDiaries] = useState<Diaries[]>([])

  useEffect(() => {
    axios.get<Diaries[]>("http://localhost:3000/api/diaries").then((res) => {
      setDiaries(res.data)
    })
  },[])
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const weather = e.currentTarget.weather.value
    const visibility = e.currentTarget.visibility.value
    console.log(visibility)
    const comment = e.currentTarget.comment.value
    const date = e.currentTarget.date.value

    const newDiary:Diary = { date, weather, visibility, comment }
    console.log(newDiary)

   e.currentTarget.reset()


   axios.post("http://localhost:3000/api/diaries", newDiary).then((res) => {
    console.log(res.data)
      setDiaries((prev) => [res.data, ...prev])
    })
  }
  return (
    <div className="flex flex-col" >
      <div>
        <h1 className="text-4xl font-bold">Travel Diaries</h1>

        <p className="mt-4">
          Welcome to your travel diaries! Here you can see a list of your recent
          travel diaries.Without forgetting on Adding a new one!
        </p>
      </div>
      <div className="mt-4">
        
        <form className="flex flex-col sm:w-1/2 lg:w-1/2  w-full" action="" onSubmit={handleSubmit}>
          <div className="mt-2">
          
       <Input type="date" id="date" name="date" />
          </div>
        <div className="mt-2">
          <Label htmlFor="weather">Weather</Label>
          <Select name="weather">
      <SelectTrigger className=" w-full">
        <SelectValue placeholder="Select weather" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>weather</SelectLabel>
          <SelectItem value="rainy">Rainy</SelectItem>
          <SelectItem value="cloudy">Cloudy</SelectItem>
          <SelectItem value="sunny">Sunny</SelectItem>
          <SelectItem value="windy">Windy</SelectItem>
          <SelectItem value="stormy">Stormy</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>

        <div className="mt-2">
          <Label htmlFor="visibility">Visibility</Label>
          <Select name="visibility">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select visibility" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Visibility</SelectLabel>
          <SelectItem value="great">Great</SelectItem>
          <SelectItem value="good">Good</SelectItem>
          <SelectItem value="ok">Ok</SelectItem>
          <SelectItem value="bad">Bad</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className="mt-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" name="comment" placeholder="It was a great day!" />
        </div>
        <div className="mt-2">
        <Button>Add</Button>

        </div>
        
        </form>
        </div>
      <Table>
        <TableCaption>A list of your recent travel diaries</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Weather</TableHead>
          <TableHead>Visibility</TableHead>
          <TableHead className="text-right">Comment</TableHead>
         
          </TableRow>
        </TableHeader>

        <TableBody>
          {diaries.map((diary) => (
            <TableRow key={diary.id}>
              <TableCell className="font-medium">{diary.id}</TableCell>
              <TableCell className="font-medium">{diary.date}</TableCell>
              <TableCell>{diary.weather}</TableCell>
              <TableCell>{diary.visibility}</TableCell>
              <TableCell className="text-right">{diary.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </div>
  )
}


export default App