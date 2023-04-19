const User = require('../models/userModels.js')

const home=(req,res)=>{
    console.log("Hello this is backend server of Job Portal for name.txt");
    res.status(200).send("Hello this is backend server of Job Portal for name.txt");
}

const createUser=async(req,res)=>{
    const user=new User(req.body)
    try{
        const token=await user.generateAuthToken()
        await user.save()
        res.status(201).send("User has been created !!!")
     }catch(error){
        res.status(400).send(error)
    }
}

const login =async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.username,req.body.password)
        const token=await user.generateAuthToken()
        res.status(200).send({user,token})
    }catch(error){
        res.status(400).send(error)
    }    
}

const readUser=async(req,res)=>{
    try{
        res.status(200).json({
            status: true,
            message: "Here is your profile",
            errors: [],
            data: req.user,
          });
    }catch(error){
        res.status(400).json({
            status: false,
            message: "Unable to fetch your profile",
            errors: error,
            data: {},
          });
    }
}

const updateUser=async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name','email','password','contact','aboutYou','domian','exp','linUrl','portLink','skills']
    const isValidOpration=updates.every((update)=>allowedUpdates.includes(update))
    
    if(!isValidOpration){
        return res.status(400).send('Invalid updates!')
    }
    try{
        const id=req.params.id
        const user=await User.findById(id)
        
        updates.forEach((update)=>user[update]=req.body[update])
        
        await user.save()
        if(!user){
            res.status(404).json({
                status: false,
                message: "No user found!!!",
                errors: error,
                data: {},
            });
        }
        res.status(200).json({
            status: true,
            message: "Your profile has been updated !!!",
            errors: [],
            data: user,
          });
    }catch(error){
        res.status(500).json({
            status: false,
            message: "Unable to fetch your profile",
            errors: error,
            data: {},
        });
    }
}


const logout =async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token !==req.token
        })
        await req.user.save()
        res.send("You have been successfully logged out !!!")
     }catch(error){
        res.status(500).send("Error Occured !!! The error is :",error)
     }
}

module.exports={
    login,logout,home,createUser,readUser,updateUser
}