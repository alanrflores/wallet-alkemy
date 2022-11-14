import axios from 'axios';

export const instance = (token) => {
    return axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            accept: 
            "/", //acá le digo que acepte todas las solicitudes
            "Content-Type": "application/json", //que acepte json
            'Authorization': `Bearer ${token ? token : localStorage.getItem("access_token")}`
        }
  });
}