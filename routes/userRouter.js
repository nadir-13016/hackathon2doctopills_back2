const models = require('../models')

module.exports = app => {
    // Get every user
    app.get('/users', (req, res)=>{
        models  
            .User
            .findAll({
                include : [models.Medecin, models.Rdv, models.Order, models.Pills, models.InfoPatient]
            })
            .then(x=> res.json(x))
    } )

    // create new user
    app.post('/users', (req, res)=>{
        models  
            .User
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a user by his Id

    app.delete('/users/:id', (req, res)=>{
        models  
            .User
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}