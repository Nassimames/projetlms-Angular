import { MatIconModule } from '@angular/material/icon'; // Importer MatIconModule
import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importer RouterModule ici

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule], // Importer les modules ici, tu n'as besoin que d'une seule déclaration
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']   // Note que c'est `styleUrls` (pluriel)
})
export class HomeComponent {
  
  isMenuOpen: boolean = false;

  // Injecter ElementRef dans le constructeur
  constructor(private elementRef: ElementRef, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Écoute les clics dans tout le document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Si le clic est en dehors du menu, on ferme le menu
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }

  // Méthode pour loguer la navigation
  logNavigation() {
    console.log('Navigating to badges'); // Utilisation de console.log directement
  }

  // Méthode de navigation vers la page de détail du cours
  navigateToCourseDetails() {
    this.router.navigate(['/course-details']); // Utiliser router.navigate pour rediriger
  }
  
  goToUserDetails() {
    this.router.navigate(['/user-details']);
  }
}
