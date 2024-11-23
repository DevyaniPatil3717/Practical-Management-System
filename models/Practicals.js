
import mongoose from 'mongoose';

// Define the schema
const practicalSchema = mongoose.Schema({
  SubjectID: {  
    type: mongoose.Schema.Types.String,  
    ref: 'Subject',  
    required: true,  // Make sure the SubjectID is required
  },
  title: {  
    type: String,  
    required: true,  // Ensure title is required
  },
  Description: {  
    type: String,  
    required: true,  // Ensure description is required
  },
  createdBy: {  
    type: mongoose.Schema.Types.String,  
    ref: 'Teachers',  
    required: true,  // Ensure createdBy is required
  },
  enrolledStudents: [{  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Students',  // This will store references to the enrolled students
  }],
});

// Register the model with Mongoose
const practicalModel = mongoose.model('practicals', practicalSchema);

export default practicalModel;
