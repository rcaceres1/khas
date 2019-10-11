import tokenService from './tokenService';
const BASE_URL = "/api/comms/";


function getComms(){
    const options = {
      headers : {
        Authorization: tokenService.getToken()
      }
    };
    return fetch(BASE_URL + 'all', options)
      .then(res => res.json());
}

async function deleteComms(id) {
    await fetch(BASE_URL + id, {
      method: 'DELETE',
      headers : {
          Authorization: tokenService.getToken(),
      }
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data
    })
}

export { getComms, deleteComms };
