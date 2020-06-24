import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: `https://inhousewebtest.site`
        baseURL: `https://www.bepaid.co.nz` || `http://157.245.188.181:8081/`

    })
}