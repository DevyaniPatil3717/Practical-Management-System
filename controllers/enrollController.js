import enrollModel from '../models/Enroll.js';  
import practicalModel from '../models/Practicals.js';  

export const enrollPractical = async (req, res) => {  
  try {  
    // Log the incoming request body for debugging
    console.log("Incoming Request Body:", req.body);  
    
    // Destructure practical and student from the request body
    const { practical, student } = req.body;  
    
    // Validate incoming data
    if (!practical || !student) {  
      console.error("Practical or Student ID is missing.");  
      return res.status(400).json({ error: "Practical or student ID is missing." });  
    }  
    
    // Create a new enrollment instance
    const enrolls = new enrollModel({  
      practical,  
      student,  
    });  
    
    // Save the enrollment and log the result
    const savedEnrolls = await enrolls.save();  
    console.log("Saved Enrollment:", savedEnrolls);  
    
    // Update the practical to include the enrollment and log the process
    console.log("Updating practical with ID:", practical);  
    const updatedPracticals = await practicalModel  
      .findByIdAndUpdate(  
        practical,  
        { $push: { enrolledStudents: student } },  
        { new: true }  
      )  
        
    
    // Check if practical was found and updated
    if (!updatedPracticals) {  
      console.error("Practical not found with ID:", practical);  
      return res.status(404).json({ error: "Practical not found." });  
    }  
    
    // Return the updated practical
    res.json({  
      practical: updatedPracticals,  
    });  
  } catch (error) {  
    // Log the error for debugging
    console.error("Error while Enrollment:", error);  
    
    // Return the error response
    return res.status(500).json({  
      error: "Error while Enrollment",  
      details: error.message,  
    });  
  }  
};


export const getEnrolls=async(req,res)=>{
  try {
    const getEnrolls=await enrollModel.find()
    res.json({
      getEnrolls
    })
  } catch (error) {
    res.json({
      error:"Cannot fetch data"
    })
    console.log(error)
  }
}