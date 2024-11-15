const e = require('express');
const users=require('../models/usermodel')

exports.registerController=async (req,res)=>{
    console.log("inside user register");
console.log(req.body);
const {username,email,password}=req.body
try{
 const existinguser=await users.findOne({email})
if(existinguser){
    res.status(406).json("user already registered.. please Login")

}else{
const newuser =new users({
    username,email,password
})
await newuser.save()
res.status(200).json(newuser)

}

}catch(err){
    console.log(err);
    res.status(401).json(err)
    

}
}



exports.loginController =async(req,res)=>{
    console.log("inside user login controller");
    const {email,password} =req.body
    console.log(req.body);
    try{
        const existinguser=await users.findOne({email,password})
        if(existinguser){
            res.status(200).json({existinguser})
        }else{
            res.status(404).json("incorrect email or password ")
        }
    }catch(err){c
        console.log(err);
        res.status(401).json(err)
    }
}


// exports.alluserController =async(req,res)=>{
//     console.log("inside all user controller");
//     const {email,password} =req.body
//     console.log(req.body);
//     try{
//         const existinguser=await users.findOne({email,password})
//         if(existinguser){
//              const allusers=await users.find({},'firstname')
             
//             res.status(200).json(allusers)
//         }else{
//             res.status(404).json("incorrect email or password ")
//         }
        

//     }catch(err){
//         res.status(401).json(err)
//     }
    
    
// }

// exports.alluserDetailController =async(req,res)=>{
//     console.log("inside all user details controller");
//     const {email,password} =req.body
//     console.log(req.body);
//     try{
//         const existinguser=await users.findOne({email,password})
//         if(existinguser){
//             const allusers = await users.find({}, 'firstname lastname email phone'); // Corrected projection
             
//             res.status(200).json(allusers)
//         }else{
//             res.status(404).json("incorrect email or password ")
//         }
        

//     }catch(err){
//         console.log(err);
        
//         res.status(401).json(err)
//     }
    
    
// }


