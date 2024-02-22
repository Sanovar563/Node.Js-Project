
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const snowflake = require('@theinternetfolks/snowflake');
const authRoutes = require('./routes/auth');
const communityRoutes = require('./routes/community');
const roleRoutes = require('./routes/role');
const memberRoutes = require('./routes/member');

app.use(express.json());

// Add your routes here
app.use('/v1/auth', authRoutes);
app.use('/v1/community', communityRoutes);
app.use('/v1/role', roleRoutes);
app.use('/v1/member', memberRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sync the database models
sequelize.sync().then(() => {
  console.log('Database synced successfully');
});
