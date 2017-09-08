const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
console.log(dev)
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route(['/userUpdate/:id', '/user/:id'])

app.prepare()
.then(() => {
  
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    const params = match(pathname)
    if (params === false) {
      handle(req, res)
      return
    }
    // assigning `query` into the params means that we still
    // get the query string passed to our application
    // i.e. /blog/foo?show-comments=true
    // app.render(req, res, '/userUpdate', Object.assign(params, query))
    app.render(req, res, `/${pathname.split('/')[1]}`, Object.assign(params, query))
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
