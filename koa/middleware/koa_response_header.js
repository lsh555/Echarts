//设置响应头的中间件
module.exports = async (ctx,next) =>{
  const contentType = 'application/json;charset=utf-8'

  ctx.set('Content-Type',contentType)
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  await next()
}