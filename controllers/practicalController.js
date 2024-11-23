import practicalModel from '../models/Practicals.js';
import subjectModel from '../models/Subject.js';

export const createPractical = async (req, res) => {
  try {
    const { SubjectID, title, Description, createdBy } = req.body;

    // Validate input
    if (!SubjectID || !title || !Description || !createdBy) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Received SubjectID:", SubjectID);

    // Find the subject by its ID or code
    const subject = await subjectModel.findOne({code: SubjectID });

    if (!subject) {
      return res.status(404).json({ message: "Subject not found !Due to  Invalid Subject Code " });
    }

    console.log("Found subject:", subject);

    // Create a new practical
    const practicalObj = new practicalModel({
      SubjectID: SubjectID, // Set the SubjectID properly
      title,
      Description,
      createdBy,
    });

    const savedPractical = await practicalObj.save();

    console.log("Saved Practical:", savedPractical);

    // Update the subject to include the practical reference
    const updatedSubject = await subjectModel
      .findByIdAndUpdate(
        subject.id,
        { $push: { practicals: savedPractical._id } },
        { new: true }
      )
      .populate("practicals")
      .exec();

    res.json({ practical: savedPractical, updatedSubject });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Error while adding Practical", error: error.message });
  }
};


export const getPracticals=async(req,res)=>{
  try {
    const getPracticals=await practicalModel.find()
    res.json({
      getPracticals
    })
  } catch (error) {
    res.json({
      error:"Cannot fetch data"
    })
    console.log(error)
  }
}