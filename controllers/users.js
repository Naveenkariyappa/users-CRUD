const User = require('../models/userData.js');

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createuser = async (req, res) => {
  console.log('============== create user ============', req.body);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    createdOn: req.body.createdOn,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateuser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findOneAndUpdate(
      {
        id: id,
      },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        createdOn: req.body.createdOn,
      }
    );
    res.status(202).json({ id: id });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteuser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findOneAndRemove({ id: id });
    res.status(203).json({ id: id });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

module.exports.getUsers = getUsers;
module.exports.createuser = createuser;
module.exports.getUserById = getUserById;
module.exports.updateuser = updateuser;
module.exports.deleteuser = deleteuser;
