import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs'; // Pour sécuriser les mots de passe
import { json } from 'body-parser';

// Crée une connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost', // Adresse de ton serveur MySQL
  user: 'root', // Utilisateur de la base de données
  password: '', // Mot de passe de la base de données (laisser vide si non défini)
  database: 'lms' // Nom de ta base de données
});

// Vérifie la connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Crée une application Express
const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(json());

// Fonction pour hacher le mot de passe avec bcrypt
async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve(hashedPassword);
      }
    });
  });
}

// Route d'inscription
app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  // Valide si tous les champs sont présents
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    // Hash le mot de passe avant de le stocker
    const hashedPassword = await hashPassword(password);

    // Crée une nouvelle entrée dans la base de données
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, hashedPassword, role], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
      }

      // Accès à insertId à partir de la première ligne retournée
      const insertId = (result as mysql.ResultSetHeader).insertId;
      return res.status(200).json({ message: 'Utilisateur inscrit avec succès', userId: insertId });
    });
  } catch (err) {
    return res.status(500).json({ message: 'Erreur lors du hachage du mot de passe' });
  }
});

// Exemple de route pour obtenir tous les utilisateurs (juste pour tester)
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
    return res.status(200).json(result);
  });
});

// Démarrer le serveur sur le port 4000
const port = 4000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
