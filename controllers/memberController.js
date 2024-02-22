
const Member = require('../models/member');

exports.addMember = async (req, res) => {
  try {
    const { communityId, userId, roleId } = req.body;

    // Validate input
    if (!communityId || !userId || !roleId) {
      return res.status(400).json({ error: 'Please provide communityId, userId, and roleId.' });
    }

    const newMember = await Member.create({ communityId, userId, roleId });
    res.json({ message: 'Member added successfully.', member: newMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.removeMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    await Member.destroy({ where: { id: memberId } });
    res.json({ message: 'Member removed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
