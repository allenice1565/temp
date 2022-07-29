export default {
    state: {
        type: "",
        stuffList: [],
        cart: [],
        select: [],
        userHomeTableList: [],
        userHomePageSize: 5,
        userHomeCurrentPage: 1

    },
    mutations: {
        setUserHomeCurrentPage(state, page) {
            state.userHomeCurrentPage = page
        },
        setUserHomePageSize(state, size) {
            state.userHomePageSize = size
        },
        setUserHomeTableList(state) {
            state.userHomeTableList = _.chunk(state.stuffList, state.userHomePageSize)[state.userHomeCurrentPage - 1]
            // console.log(_.chunk(state.stuffList, _.ceil(length / state.userHomePageSize)))
            // console.log(state.userHomeCurrentPage)
            // console.log(state.stuffList)
        },
        delCartItem(state, code) {
            let index = state.cart.findIndex((item) => item.code === code)
            state.cart.splice(index, 1)
        },
        setStuffList(state, list) {
            state.stuffList = list
        },
        SETTYPE(state, type) {
            state.type = type
        },
        setCart(state) {
            state.cart = state.select
        },
        addSelect(state, arr) {
            arr.forEach(item => {
                let index = state.select.findIndex(value => value.code === item.code)
                if (index === -1) {
                    state.select.push(item)
                }
            })
        },
        addCart(state, arr) {
            arr.forEach(item => {
                let index = state.cart.findIndex(value => value.code === item.code)
                if (index === -1) {
                    state.cart.push(item)
                    // console.log("addCart success")
                }
            })
        },
        changeApplyNumber(state, obj) {
            state.stuffList.forEach(item => {
                if (item.code === obj.code) {
                    item.applyNumber = obj.applyNumber
                }
            });
        },
        changeNote(state, obj) {
            state.stuffList.forEach(item => {
                if (item.code === obj.code) {
                    console.log("find")
                    console.log(obj.content)
                    item.note = obj.content
                }
            });
        }
    },
    actions: {},
    getters: {
    }
}