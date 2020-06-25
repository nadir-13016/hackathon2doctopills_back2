const models = require('../models')

module.exports = app => {
    app.get('/users', (req, res)=>{
        models  
            .User
            .findAll({
                include : [models.Medecin]
            })
            .then(x=> res.json(x))
    } )
    app.post('/users', (req, res)=>{
        models  
            .User
            .create(req.body)
            .then(x=> res.json(x))
    } )
}