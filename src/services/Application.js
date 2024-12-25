const login  = require('../entites/login');


const loginUser = async (req, res) => {
  try {
    const userExist = await login.findOne({ Phone: req.body.Phone });

    if (userExist) {
      console.log("User already exists:", userExist);
      return res.status(200).json(userExist);
    }
    
    const createUser = new login(req.body);
    const user = await createUser.save();
    console.log("2222");
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    loginUser
}
