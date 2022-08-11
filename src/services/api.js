import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://secret-fortress-78481.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;