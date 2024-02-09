import axios from "axios"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
import { Diary,Diaries } from "@/types"
import { Textarea } from "../ui/textarea"
  

interface addDiaryProps {
    setDiaries: React.Dispatch<React.SetStateAction<Diaries[]>>

}

const AddDiary = ({setDiaries}:addDiaryProps) => {
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
    )
}

export default AddDiary
