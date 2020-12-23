import axios from 'axios'

const instance = axios.create({
    baseURL: "https://wp-mern.herokuapp.com/"
})

export default instance