import { useQuery } from '@tanstack/react-query'
import getNotes from "../api/getNotes";
import Author from './Author'
import { useEffect } from 'react';

function Notes() {
  const {data: dataNotes, isLoading: isLoadingNotes, isError: isErrorNotes, error: errorNotes} = useQuery({
    queryKey: ['data'],
    queryFn: getNotes
  })

  if(isLoadingNotes) return <div>Loading...</div>
  else if(isErrorNotes) return <div>Error: {errorNotes.message}</div>


  return (
    <div>
      {dataNotes.map((item: any, index: any) => {
        return (
        <div key={index} className='max-w-screen-sm bg-white border-2 border-gray-500/50 my-4 rounded-lg'>
          <Author />
          <h3 className='p-2' key={item.fact}>{item.fact}</h3>
          <br />
        </div>
        )
      })
      }
    </div>
  )
}

export default Notes