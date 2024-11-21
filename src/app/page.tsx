'use client'

import Card from '../app/components/Card'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

function page() {


  return (
      <QueryClientProvider client={queryClient}>  
      <Card />
      </QueryClientProvider>
  )
}

export default page