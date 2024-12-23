const login  = require('../entites/login');


const loginUser = async (req, res) => {
  try {
    const createUser = new login(req.body);
    console.log("error111");
    const user = await createUser.save();
    console.log("2222");
    res.status(201).send(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    loginUser
}
