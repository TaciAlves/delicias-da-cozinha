import axios from 'axios';
/* 
// PARA RODAR COM IPV4: json-server --watch -d 180 --host 192.168.0.102 db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.0.102:3000'
})

export default api;