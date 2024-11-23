import mongoose from "mongoose";


const subjectSchema = new mongoose.Schema({
  
  
  name: {
    type: String,
    required: true,
    
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.String,
    ref: "Teacher", // Assuming this references a User model
    required: true,
  },
  practicals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "practicals", // Correctly reference the Practical model
    },
  ],
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;
