const models = require('../models')

module.exports = app => {
    // Get every InfoPatient
    app.get('/InfoPatients', (req, res)=>{
        models  
            .InfoPatient
            .findAll({
                include : [models.DataPatient],
                where :{
                        id: 1
                    } 
            })
            .then(x=> res.json(x))
    } )

    // create new InfoPatient
    app.post('/InfoPatients', (req, res)=>{
        models  
            .InfoPatient
            .create(req.body)
            .then(x=> res.json(x))
    } )

    // delete a InfoPatient by his Id
    
    app.delete('/InfoPatients/:id', (req, res)=>{
        models  
            .InfoPatient
            .destroy(req.params.id)
            .then(x=> res.json(x))
    } )
}