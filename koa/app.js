//创建koa对象
const Koa = require('koa')
const app = new Koa()
//编写响应函数
//第一层中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)

//第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)

//第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
//绑定端口号 8888

app.listen(8888)

const webSocketService = require('./service/web_socket_service')
//开启服务端监听，监听客户端的连接
// 当某一个客户端连接成功之后, 就会对这个客户端进行message事件的监听
webSocketService.listen()

// const WebSocket = require('ws')
// //创建WebSocket服务端的对象，绑定的端口号
// const wss = new WebSocket.Server({
//   port:9998
// })

// //对客户端的连接事件进行监听
// //client:代表的是客户端的连接socket对象
// wss.on('connection',client =>{
//   console.log('有人链接...')
//   //对客户端的连接对象进行message事件的监听
//   client.on('message',msg =>{
//     console.log('客户端发送数据给服务端了'+msg)
//     //服务端向客户端推送
//   client.send('hello 接收到了')
//   })
// })