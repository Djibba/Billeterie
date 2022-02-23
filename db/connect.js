require('dotenv').config();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://djibba:djibba@cluster0.jgzds.mongodb.net/billeterie?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));