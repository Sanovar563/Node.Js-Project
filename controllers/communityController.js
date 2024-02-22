
const Community = require('../models/community');

exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.findAll();
    res.json({ communities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createCommunity = async (req, res) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: 'Please provide a name for the community.' });
    }

    const newCommunity = await Community.create({ name });
    res.json({ message: 'Community created successfully.', community: newCommunity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
