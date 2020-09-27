import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

http.interceptors.request.use((config) => config)

http.interceptors.response.use((response) => response.data)

export default http
