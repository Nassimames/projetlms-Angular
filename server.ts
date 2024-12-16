import express from 'express';
import mysql from 'mysql2';

// Configuration de la connexion à MySQL
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'lms'
});

// Vérification de la connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Initialisation du serveur Express
const app = express();

// Démarrage du serveur
const port = 4000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
