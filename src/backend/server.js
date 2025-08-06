const express = require('express');
const cors = require('cors');
require('dotenv').config();
const notificationsRoutes = require('./routes/notifications');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1/notifications', notificationsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
