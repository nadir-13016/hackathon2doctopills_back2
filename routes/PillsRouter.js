const models = require('../models')

module.exports = app => {
    // Get every Order
    app.get('/pills', (req, res)=>{
        models  
            .Pills
            .findAll()
            .then(x=> res.json(x))
    } )

    // create new Pills
    app.post('/pills', (req, res)=>{
        models  
            .Pills
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a Pills by his Id
    
    app.delete('/pills/:id', (req, res)=>{
        models  
            .Pills
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}