import axios from 'axios';

export const api = () => {
    
  return {  
        getDish: async () => {
            const endPoint = `https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery`
            console.log(endPoint)
            try {
                const response = await axios.get(endPoint);
                console.log(response);
                const jseado = JSON.parse(response)
                console.log(jseado);
                return response.data;
              } catch (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              };
        }
    }
}

export default api;
