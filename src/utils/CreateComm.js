const BASE_URL = "/api/comms/";
async function createComm(options) {
  try {
    const sendPost = await fetch(BASE_URL + "create", options);
    const postReults = await sendPost.json();
    return await postReults;
  } catch (error) {
    console.log(error);
  }
}

export default createComm;
