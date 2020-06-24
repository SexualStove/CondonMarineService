import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: `https://inhousewebtest.site`
        baseURL: `http://www.bepaid.co.nz:8081/` || 'http://localhost:8081/' || 'https://localhost:8081/'
        || `https://www.bepaid.co.nz/:8081` || `https://www.bepaid.co.nz:8081/`
    })
}