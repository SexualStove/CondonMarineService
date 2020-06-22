import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: `https://inhousewebtest.site`
        baseURL: `http://157.245.188.181:8081/`

    })
}