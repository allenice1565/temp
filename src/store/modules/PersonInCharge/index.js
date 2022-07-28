export default {
    state: {
        type: "",
        stuffList: [
            {
                id: "0",
                type: ["个人用品", "打印纸"],
                name: "A4纸",
                code: "001001",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "1",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101001",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "2",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101002",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "3",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101003",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "4",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101004",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "5",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101005",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "6",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101006",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "7",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101007",
                scale: "长20m，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "8",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101008",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            },
            {
                id: "9",
                type: ["公共用品", "公共设备"],
                name: "会议室投影仪",
                code: "101009",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/A4.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            }],
        cart: [],
        select: []
    },
    mutations: {
        SETTYPE(state, type) {
            state.type = type
        },
        setCart(state) {
            state.cart = state.select
        },
        addSelect(state, arr) {
            state.select = arr
            // arr.forEach(item => {
            //     let index = state.select.findIndex(value => value.code === item.code)
            //     if (index === -1) {
            //         state.select.push(item)
            //     }
            // })
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