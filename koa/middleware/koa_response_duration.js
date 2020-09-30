//计算服务器消耗时长的中间件
module.exports = async (ctx,next) =>{
  //记录开始时间
   const start = Date.now()
   
   //为了第二层中间件能执行，必须加next
   await next()

   //记录结束时间
   const end =Date.now()

   //总时间
   const duration = end - start

   //ctx.set,设置响应头
   ctx.set('X-Response-Time',duration + 'ms')

}