
  const getNotes = async () => {
    const res = await fetch('https://catfact.ninja/facts')
    const data = await res.json()
    return data.data
  }

  export default getNotes