export class Utilisateur {
    id: number;
    nom: string;
    email: string;
    mot_de_passe: string;
  
    constructor(id: number, nom: string, email: string, mot_de_passe: string) {
      this.id = id;
      this.nom = nom;
      this.email = email;
      this.mot_de_passe = mot_de_passe;
    }
  }
  