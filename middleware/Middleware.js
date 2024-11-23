import UserModel from "../models/User.js"

export const isAdmin = async (req, res, next) => {
  try {
    // Destructure 'createdBy' from request body
    const { createdBy } = req.body;

    console.log(`createdBy: ${createdBy}`);

    // Validate 'createdBy'
    if (!createdBy) {
      return res.status(400).json({
        message: "Missing 'createdBy' in request body",
      });
    }

    const email = createdBy; // Assign 'createdBy' to '_id'

    console.log(`_id: ${email}`);

    // Fetch user information from database
    const userInfo = await UserModel.findOne({ email });

    console.log("User Info:", userInfo);

    // Check user role
    if (userInfo && userInfo.role === "Admin") {
      next(); // Proceed to the next middleware or route
    } else {
      res.status(403).json({
        message: "Access Denied, only Admin can access",
      });
    }
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const isTeacher = async (req, res, next) => {
  try {
    // Destructure 'createdBy' from request body
    const { createdBy } = req.body;

    console.log(`createdBy: ${createdBy}`);

    // Validate 'createdBy'
    if (!createdBy) {
      return res.status(400).json({
        message: "Missing 'Email' in request body",
      });
    }

    const email = createdBy; // Assign 'createdBy' to '_id'

    console.log(`_id: ${email}`);

    // Fetch user information from database
    const userInfo = await UserModel.findOne({email });

    console.log("User Info:", userInfo);

    // Check user role
    if (userInfo && userInfo.role === "Teacher") {
      next(); 
      console.log("in isTeacher middleware")

      // Proceed to the next middleware or route
    } else {
      res.status(403).json({
        message: "Access Denied, only Teachers can access",
      });
    }
  } catch (error) {
    console.error("Error in isTeacher middleware:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};




export const isStudent = async (req, res, next) => {
  try {
    // Destructure 'createdBy' from request body
    const { student } = req.body;

    console.log(`createdBy: ${student}`);

    // Validate 'createdBy'
    if (!student) {
      return res.status(400).json({
        message: "Missing 'student' in request body",
      });
    }

    const _id = student; // Assign 'createdBy' to '_id'

    console.log(`_id: ${_id}`);

    // Fetch user information from database
    const userInfo = await UserModel.findOne({ _id });

    console.log("User Info:", userInfo);

    // Check user role
    if (userInfo && userInfo.role === "Student") {
      next(); 
      

      // Proceed to the next middleware or route
    } else {
      res.status(403).json({
        message: "Access Denied, only Students can Enroll",
      });
    }
  } catch (error) {
    console.error("Error in isStudent middleware:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const isAdminORteacher = async (req, res, next) => {
  try {
    // Destructure 'createdBy' from request body
    const { Email } = req.body;

    console.log(`createdBy: ${Email}`);

    // Validate 'createdBy'
    if (!Email) {
      return res.status(400).json({
        message: "Missing 'Email' in request body",
      });
    }

    const email = Email; // Assign 'createdBy' to '_id'

    console.log(`_id: ${email}`);

    // Fetch user information from database
    const userInfo = await UserModel.findOne({ email });

    console.log("User Info:", userInfo);

    // Check user role
    if( (userInfo && userInfo.role === "Admin") ||(userInfo && userInfo.role === "Teacher") ){
      next(); // Proceed to the next middleware or route
    } else {
      res.status(403).json({
        message: "Access Denied, only Admin can access",
      });
    }
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
