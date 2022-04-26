import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
// import all routes for customerscredentnails,customersmenuinfo,productsmenuinfo,ordersmenuinfo
import customerscredentnails_routes from './routes/customerscredentials_route'
import customersmenuinfo_routes from './routes/customersmenuinfo_route'
import productsmenuinfo_routes from './routes/n_productsmenuinfo_route'
import ordersmenuinfo_routes from './routes/ordersmenuinfo_route'

var cors = require('cors')

var corsOptions = {
     origin:'http://172.0.0.1',
     optionsSuccessStatus: 200 
   }

const app: express.Application = express()
const address: string = '0.0.0.0:3000'

app.use(bodyParser.json())
app.use(cors(corsOptions))
customersmenuinfo_routes(app)
customerscredentnails_routes(app)
productsmenuinfo_routes(app)
ordersmenuinfo_routes(app)


app.get('/', function (req: Request, res: Response) {
     res.send('Server is started up !')
})
// For inducation of the oder come from another domain 
app.get('/ordersmenuinfo/:id', cors(corsOptions), function (req, res, next) {
     res.json({msg: 'This is order is created from another domain'})
   })
app.listen(3000, function () {
     console.log(`starting app on: http://localhost:3000/`)
})
export default app