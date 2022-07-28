const express = require('express')
const app = express()
const port = 3000
// 解决跨域问题

app.all("*", function (req, res, next) {
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers', 'content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    if (req.method.toLowerCase() == 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})
app.get('/api/get_stuff_list', (req, res) => {
    res.send({
        code: 200,
        data: [
            {
                id: "0",
                type: ["个人用品", "打印纸"],
                name: "A4纸",
                code: "001001",
                scale: "长20cm，宽16cm",
                unit: "包",
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
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
                image: "/images/tyy.png",
                totalNumber: 100,
                suggestNumber: 1,
                applyNumber: 0,
                note: "",
            }
        ]
    })
})

app.post('/api/submit_cart', (req, res) => {
    console.log('api/get_stuff_list')

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})