const models = require('../models')

module.exports = app => {
    // Get every Rdv
    app.get('/Rdvs', (req, res)=>{
        models  
            .Rdv
            .findAll()
            .then(x=> res.json(x))
    } )

    // create new Rdv
    app.post('/Rdvs', (req, res)=>{
        models  
            .Rdv
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a Rdv by his Id
    
    app.delete('/Rdvs/:id', (req, res)=>{
        models  
            .Rdv
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}