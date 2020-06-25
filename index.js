const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const models = require('./models')

app.use(bodyParser({
    extented : true
}))

app.get('/', (req, res)=> {
    res.send('Inch Allah ça marche ')
})

require('./routes/userRouter')(app);
require('./routes/InfoPatientRouter')(app);
require('./routes/DataPatientRouter')(app);
require('./routes/MedecinRouter')(app);
require('./routes/OrderRouter')(app);
require('./routes/PillsRouter')(app);
require('./routes/RdvRouter')(app);


models  
    .sequelize
    .sync()
    .then(app.listen(3000, ()=> {
        console.log('Server Running')
    }))
