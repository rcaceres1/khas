import tokenService from "../utils/tokenService"; 
const BASE_URL = "/api/comms";

async function createComm(comm) {
  const options = {
      method: 'POST',
      headers : {
          "content-type" : "application/json",
          Authorization: tokenService.getToken()
      },
      body: JSON.stringify(comm)
  }    
  try {
    const post = await fetch(BASE_URL, options);
    const postResults = await post.json();
    return postResults;
  } catch (error) {
    console.log(error);
    throw Error("Something Went Wrong in Create Comm")
  }
}

export default createComm;
