import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
})

http.interceptors.request.use((config) => config)

http.interceptors.response.use((response) => response.data)

export default http
