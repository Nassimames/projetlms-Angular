import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { routes } from '../app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}
  navigateToSignIn(): void {
    this.router.navigate(['/signup']);  // Navigue vers la page d'inscription
  }

  onLogin(): void {
    // Logique de connexion (par exemple, authentification)

    // Après la connexion, redirige vers Home
    this.router.navigate(['/home']);
  }
  isMenuOpen = false;

  toggleMenu() {
    console.log('Menu clicked!');
    // Ajoute ici la logique pour afficher/masquer un menu, si nécessaire
  }
}
