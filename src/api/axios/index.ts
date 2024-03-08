import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: `${process.env.API_URI}` ?? 'https://localhost',
    paramsSerializer: {
        serialize: function (params: Record<string, any>) {
            return qs.stringify(params)
        },
    },
})

export default instance
