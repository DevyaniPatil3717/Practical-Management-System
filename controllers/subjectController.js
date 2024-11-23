import subjectModel from "../models/Subject.js";

export const createSubject=async (req, res) => {
  try {
    const { name, code, createdBy } = req.body;

    const subjectObj = new subjectModel({
      
      name,
      code,
      createdBy,
    });

    const savedsubjectObj = await subjectObj.save();

    res.json({
      savedsubjectObj,
      message: "subject created successfully"
    });

  } catch (error) {
      console.log(error);
      
    res.json({
      error: "Error occured",
    });

  }
};

  export const getsubjects=async(req,res)=>{
    try {
      const getsubjects=await subjectModel.find()
      res.json({
        getsubjects
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }