import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:3000/api/auth/v1/",
    withCredentials: true,
    credentials: "include"
})
