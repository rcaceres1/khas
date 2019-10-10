const BASE_URL='/api/comms/'

async function getComms(user){
    const options = {
      method: 'POST',
      headers : {
          "content-type" : "application/json"
      },
      body: JSON.stringify(user)
    }
    try{
        const fetchComms = await fetch(BASE_URL + 'all', options)
        const data = await fetchComms.json()
        return data
    } catch(error) {
        console.log(error)
    }
}

async function deleteComms(options){
    try{
      const deletedComm = await fetch(BASE_URL + 'deleteComm', options)
      const data = await deletedComm.json()
      return await data
    } catch(error) {
      console.log(error)
    }
  }

 export { getComms, deleteComms }