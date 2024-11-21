import { useQuery } from '@tanstack/react-query'
import getAuthor from "../api/getAuthor";


function Author() {

    const {data: dataAuthor, isLoading: isLoadingAuthor, isError: isErrorAuthor, error: errorAuthor} = useQuery({
    queryKey: ['author'],
    queryFn: getAuthor,
  })

  if(isLoadingAuthor) return <div>Loading...</div>
  else if(isErrorAuthor) return <div>Error: {errorAuthor.message}</div>

  return (
    <div>
      {dataAuthor["results"].map((item: any) => {
        return (
          <div key={item["name"].first} className='flex flex-row m-2'>
            <img className='rounded-full' src={item["picture"].thumbnail}></img>
            <h3 className='mt-4 font-bold' key={item["name"].first}>{item["name"].first} {item["name"].last}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Author