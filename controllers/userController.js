 import User from "../models/User.js"

export const createAdmin=async (req, res) => {
    
  try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Admin created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Already existing  Account with the same Email ! ",
      });
  
      console.log(error)
    }
  };

  export const createTeacher=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Teacher",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Teacher created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Already existing  Account with the same Email ! ",
      });
  
      console.log(error)
    }
  };

  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: " Student created !"
      });
  
    } catch (error) {
      res.json({
        error: "Already existing  Account with the same Email !",
      });
  
      console.log(error)
    }
  };

  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

  export const getAllAdmins=async(req,res)=>{
    try {
      const getadmins=await User.find({role:"Admin"})
      res.json({
        getadmins
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

  export const getAllTeachers=async(req,res)=>{
    try {
      const getAllTeachers=await User.find({role:"Teacher"})
      res.json({
        getAllTeachers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

  

  export const getAllStudents=async(req,res)=>{
    try {
      const getAllStudents=await User.find({role:"Student"})
      res.json({
        getAllStudents
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }
