const express = require('express')
const router = express.Router()
// const Users = require('../models/User')
const userController = require('../controller/userController')

// const users =[

//     {name:'Kawser Ahmed', email:'kawser@info.com', mobile:'01733728905'},
//     {name:'Shovon Ali', email:'shovon@info.com', mobile:'01733728906'},
//     {name:'Shawon Hossain', email:'shawon@info.com', mobile:'01733728907'},
//     {name:'Rimon Mirza', email:'rimon@info.com', mobile:'01733728908'},

// ]

//GET

// router.get('/',(req, res, next)=>{

//     Users.find().then(user => {
//         res.status(200).json({
//             message:'This is GET all',
//             user
//         })
        
//     }).catch(err=>{
//             console.log(err)
//             res.status(500).json({
//                     message:'Error',
//                     error:err
//             })
//         }
//     )

   

// })

//GET BY Controller
router.get('/', userController.getAllUsersController )


// router.get('/:id',(req, res, next)=>{
//     // console.log(req.url)
//     const id = req.params.id

//     res.json({
//         id,
//         message:'this is GET by ID'
//     })

// })

//GET signle by id from controller

router.get('/:id', userController.getSingleUserController)



//POST
//router.post('/',(req, res, next)=>{

    // const name = req.body.name
    // const email = req.body.email
    // const mobile = req.body.mobile
    // users.push({

    //     name: req.body.name,
    //     email: req.body.email,
    //     mobile: req.body.mobile 


    // })

    // res.status(200).json({
    //     message:'Data Saved Successfully!!',
       
    // })

    // const users = new Users({
    //     name:req.body.name,
    //     email: req.body.email,
    //     mobile: req.body.mobile
    // })

    // users.save().then(data=>{
    //              res.json({data})
    //          }).catch(err=>console.log(err))


//})
router.post('/', userController.postNewUserController)

//PUT

// router.put('/:id',(req, res, next)=>{
//     // console.log(req.url)
//     const id = req.params.id

//     res.json({
//         id,
//         message:'this is PUT by ID'
//     })

// })
//PUT By Controller

router.put('/:id', userController.editUserController)

//PITCH

router.patch('/:id',(req, res, next)=>{
    // console.log(req.url)
    const id = req.params.id

    res.json({
        id,
        message:'this is PATCH by ID'
    })

})

//DELETE

// router.delete('/:id',(req, res, next)=>{
//     // console.log(req.url)
//     const id = req.params.id

//     res.json({
//         id,
//         message:'this is DELETE by ID'
//     })

// })

//DELETE BY CONTROLLER

router.delete('/:id',userController.deleteUserController )



module.exports = router