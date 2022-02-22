const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/billeterie';
const connect = mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));