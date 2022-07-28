import { get, post } from './request.js'

const getStuffList = get('http://localhost:3000/api/get_stuff_list')
const search = get('http://localhost:3000/api/search')
const submitCart = post('http://localhost:3000/api/submit_cart')

export { getStuffList, submitCart, search }