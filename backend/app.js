const express = require('express');
const app = express();
const noteRoutes = require('./routes/noteRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());
app.use('/notes', noteRoutes);

app.listen(3000, () => {
    console.log('Server is running on PORT 3000 ⚙️');
});