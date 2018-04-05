const path  = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,'db.json'))
const middlewares = jsonServer.defaults()

// router.render = (req, res) => {
//   debugger
//   res.jsonp({
//     body: res.locals.data
//   })
// }

const env = {
  port: 3000
}
server.use(middlewares)

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

// server.use((req, res, next) => {
//   if (isAuthorized(req)) { // add your authorization logic here
//     next() // continue to JSON Server router
//   } else {
//     res.sendStatus(401)
//   }
//  })

server.use(router)
server.listen(env.port, () => {
  console.log('JSON Server is running on http://localhost:'+env.port+'/')
})