  const getAuthor = async () => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    return data
  }

  export default getAuthor