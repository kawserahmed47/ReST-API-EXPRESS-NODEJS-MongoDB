const Users = require('../models/User')

const getAllUsersController = (req, res, next)=>{

    
    Users.find().then(user => {
        res.status(200).json({
            message:'This is GET all',
            user
        })
        
    }).catch(err=>{
            console.log(err)
            res.status(500).json({
                    message:'Error',
                    error:err
            })
        }
    )

}

const postNewUserController = (req, res, next)=>{

    
    const users = new Users({
        name:req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    })

    users.save().then(data=>{
                 res.json({data})
             }).catch(err=>console.log(err))

}

const getSingleUserController = (req, res, next)=>{
    let id = req.params.id
    // console.log(id)
    // next()

    Users.findById(id).then(user => {
        res.status(200).json({
            message:'This is GET BY ID',
            user
        })
        
    }).catch(err=>{
            console.log(err)
            res.status(500).json({
                    message:'Error',
                    error:err
            })
        }
    )

}

const deleteUserController =(req, res, next)=>{

    let id = req.params.id
    Users.findByIdAndDelete(id).then(result=>{
        res.json({
            message:'User Deleted',
            result
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'Error Delete',
            error:err
    })
    })



}

const editUserController = (req, res, next)=>{
    let id = req.params.id

    let updateUser = {
        name:req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }

    Users.findByIdAndUpdate(id,{$set:updateUser}).then(user => {
        res.json({
            message:'Data Updated',
            user
        })
    }
        
    ).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'data updated Failed',
            err
        })
    })

}




module.exports ={
    getAllUsersController,
    postNewUserController,
    getSingleUserController,
    deleteUserController,
    editUserController
}
