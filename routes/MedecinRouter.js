const models = require('../models')

module.exports = app => {
    // Get every medecin
    app.get('/medecins', (req, res)=>{
        models  
            .Medecin
            .findAll()
            .then(x=> res.json(x))
    } )


    // create new Medecin
    app.post('/medecins', (req, res)=>{
        models  
            .Medecin
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a Medecin by his Id
    
    app.delete('/medecins/:id', (req, res)=>{
        models  
            .Medecin
            .destroy(req.params.id)
            .then(x=> res.json(x))
    })
}