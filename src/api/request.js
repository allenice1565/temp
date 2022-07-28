import axios from "axios";

// const ERR_OK = 0


function get(url) {
    return function (params) {
        return axios.get(url, { params }).then(res => {
            const { data } = res.data;
            console.log(data)
            return data
        }).catch(e => { console.log(e) })
    }
}

function post(url) {
    return function (params) {
        return axios.post(url, params).then((res => {
            const { data } = res.data;
            return data
            // const { errNum, data } = res.data;

            // if (errNum === ERR_OK) {
            //     return data
            // }
        })).catch(e => { console.log(e) })
    }
}

export { get, post }