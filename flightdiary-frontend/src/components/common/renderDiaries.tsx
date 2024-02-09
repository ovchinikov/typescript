import { Diaries } from "@/types"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  interface RenderDiariesProps {
    diaries: Diaries[]
  
  }

const RenderDiaries = ({diaries}:RenderDiariesProps) => {
    return (
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
    )
}

export default RenderDiaries
