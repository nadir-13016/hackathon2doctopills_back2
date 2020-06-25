const models = require('../models')

module.exports = app => {
    // Get every DataPatient
    app.get('/dataPatients', (req, res)=>{
        models  
            .DataPatient
            .findAll()
            .then(x=> res.json(x))
    } )

    // create new DataPatient
    app.post('/dataPatients', (req, res)=>{
        models  
            .DataPatient
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a DataPatient by his Id
    
    app.delete('/dataPatients/:id', (req, res)=>{
        models  
            .DataPatient
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}