import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { LoginRequest } from '../modules/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private utilisateurService: UtilisateurService) {}

  onLogin(): void {
    const loginRequest: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.utilisateurService.login(loginRequest.email, loginRequest.password).subscribe({
      next: (user) => {
        console.log('Utilisateur connecté', user);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erreur lors de la connexion', err);
        this.errorMessage = 'Identifiants incorrects';
      }
    });
  }
}
