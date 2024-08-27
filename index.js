const express = require('express'),
app = express(),
bodyParser = require('body-parser');
require('express-async-errors')


const db = require('./db')
employeeRoutes =require('./contollers/employee.controller')
userRoutes = require('./contollers/user.controller')

//middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)
app.use('/api/users',userRoutes)
app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.status||500).send('something went wrong !')
})

db.query("SELECT 1")
.then(() => {
    console.log('db connection succeeded')
    app.listen(3300,
        () => console.log('server started at 3300'))
    
})
.catch(err => console.log('db connection failed \n'+err))
