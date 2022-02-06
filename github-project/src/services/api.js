import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    'User-Agent': 'request'
  }
})

export default api
