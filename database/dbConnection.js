const mongoose=require('mongoose')

const connectionstring=process.env.DBCONNECTIONSTRING

mongoose.connect(connectionstring).then(res=>{
    console.log("mongo db connection sucessful");
    
}).catch(err=>{
    console.log("mot connected to database");
    console.log(err);
    
    
})