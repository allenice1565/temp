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
app.get('/api/getStuffList', (req, res) => {
    let frequency = 100
    let arr = []
    for (let i = 0; i < 100; i++) {
        arr.push({
            type: ["个人用品", "打印纸"],
            name: "A4纸",
            code: "0010" + (i + 1),
            scale: "长20cm，宽16cm",
            unit: "包",
            image: "/images/tyy.png",
            totalNumber: 100,
            suggestNumber: 1,
            frequency
        })
        frequency -= 1;
    }
    res.send({
        code: 200,
        data: arr

    })
})

app.post('/api/submit_cart', (req, res) => {
    console.log('api/get_stuff_list')

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})