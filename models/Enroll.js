import mongoose from 'mongoose';  
  
const enrollSchema=mongoose.Schema({  
    practical:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"Practicals",  
        required:true  
    },  
    student:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User",  
        required:true  
    }  
  
})  
  
const enrollModel=mongoose.model("Enroll",enrollSchema);  
  
export default enrollModel; 