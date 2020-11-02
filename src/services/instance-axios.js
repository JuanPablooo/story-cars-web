import Axios from 'axios';
const BASE_URL ="http://localhost:8080/v1";
const instance = Axios.create(
   {
       baseURL: BASE_URL,
   }
)

export default instance;