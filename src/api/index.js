import { get, post } from './request.js'

const getStuffList = get('http://localhost:3000/api/getStufflist')
const search = get('http://localhost:3000/api/search')
const submitCart = post('http://localhost:3000/api/submitCart')

export { getStuffList, submitCart, search }