import axios from 'axios';

const Api = axios.create({
<<<<<<< HEAD
    baseURL: 'https://gentle-dawn-07883.herokuapp.com',
=======
    baseURL: 'https://secret-fortress-78481.herokuapp.com/',
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;