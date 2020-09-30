//创建koa对象
const Koa = require('koa')
const app = new Koa()
//编写响应函数
//ctx:上下文，web容器,
//next:下一个中间件,下一层中间件是否能够执行，取决于next这个函数有没有被调用
app.use((ctx,next)=>{
   console.log('第一层中间件')
   ctx.response.body = 'hello'
   next() //为了让第二层中间件执行
})

//第二层中间件
app.use( async (ctx,next)=>{
  console.log('第二层中间件')
  const ret = await next()  //返回一个promise
  // 当用了async和await后,就返回'i love'
  console.log(ret) 
  // next() //为了让第三层中间件执行
})

//第三层中间件
app.use((ctx,next)=>{
  console.log('第三层中间件')
  return 'i love'
})


//绑定端口号 3000

app.listen(3000)
