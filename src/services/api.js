import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: `https://inhousewebtest.site`
        baseURL: `https://www.bepaid.co.nz:8081`

    })
}