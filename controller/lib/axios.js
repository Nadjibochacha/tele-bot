const axios = require('axios')

const My_tocken = '7528159125:AAG76sxiXng-lpbYGGDTa60f3NMv0CSjA7o'
const base_url = `https://api.telegram.org/bot${My_tocken}`

function getAxiosInstance(){
    return {
        get(method, params){
            return axios.get(`/${method}`,{
                baseURL: base_url,
                params
            })
        },
        post(method, data) {
            return axios({
                method: 'post',
                baseURL:base_url,
                url: `/${method}`,
                data
            })
        }
    }
}

module.exports = {axiosInstance : getAxiosInstance()}