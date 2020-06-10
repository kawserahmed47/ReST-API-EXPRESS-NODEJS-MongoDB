const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users-db');

const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
})

db.once('open', ()=>{
    console.log('Database Connection Established')
})

const usersRoute = require('./api/route/users')

// const Schema = mongoose.Schema 
// const usersSchema = new Schema({

//     name:{
//         type: String,
//         required:true,
//         minlength:3
//     },
//     email:{
//         type: String,
//         required: true,
//         minlength:4
//     },
    
//     mobile:{
//         type: Number,
//         required: true,
//         minlength: 11
//     }

    
// })

// const Users = mongoose.model('Users', usersSchema)



const app = express()
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

const PORT = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     console.log('I am a middleware Function')
//     next()
// })

app.use('/api/users', usersRoute)

// app.get('/demo',(req, res)=>{
//     const users = new Users({
//         name: 'Demo Name',
//         email:'demo@emai.com',
//         mobile: '01733728907'

//     })
//     users.save().then(data=>{
//         res.json({data})
//     }).catch(err=>console.log(err))
//})

// app.get('/demo-data',(req, res)=>{
//     Users.find().then(data =>{
//         res.json(data)
//     }).catch(
//             err => console.log(err)
//         )
// })

// app.get('/',(req, res)=>{

//     res.send('<h1>FIHA MONI</h1>')

// })
// app.get('/users',(req, res)=>{

//     // res.send('<h1>This is Users Page</h1>')
//     res.json(users)

// })

// app.post('/users',(req, res)=>{

//     // res.send('<h1>This is Users Page</h1>')
//     res.json({
//         name:'Habil Box', email:'habil@info.com', mobile:'01733728909'
//     })

// })

app.listen(PORT, () =>{

    console.log(`Server is Running on PORT ${PORT}`)

})



// const users =[

//     {name:'Kawser Ahmed', email:'kawser@info.com', mobile:'01733728905'},
//     {name:'Shovon Ali', email:'shovon@info.com', mobile:'01733728906'},
//     {name:'Shawon Hossain', email:'shawon@info.com', mobile:'01733728907'},
//     {name:'Rimon Mirza', email:'rimon@info.com', mobile:'01733728908'},

// ]