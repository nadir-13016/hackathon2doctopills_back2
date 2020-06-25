const models = require('../models')

module.exports = app => {
    // Get every Order
    app.get('/orders', (req, res)=>{
        models  
            .Order
            .findAll()
            .then(x=> res.json(x))
    } )

    // create new Order
    app.post('/orders', (req, res)=>{
        models  
            .Order
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a Order by his Id
    
    app.delete('/orders/:id', (req, res)=>{
        models  
            .Order
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}