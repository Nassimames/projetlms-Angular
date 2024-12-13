import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LayoutComponent } from '../layout/layout.component'; // Importer LayoutComponent
import { RouterModule } from '@angular/router'; // Importer RouterModule

@Component({
  selector: 'app-course-list',
  imports: [CommonModule,LayoutComponent,RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
  standalone: true,
})
export class CourseListComponent {
  courses = [
    {
      id: '1',
      name: 'Introduction à Angular',
      description: 'Apprenez les bases du framework Angular.',
     // imageUrl: 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png' // Ajoute une URL d'image ici
    },
    {
      id: '2',
      name: 'Développement Web',
      description: 'Un cours complet sur le développement web.',
      imageUrl: 'Black_Circle_Icon_Business_Logo-removebg-preview.png'
    },
    
    {
      id: '3',
      name: 'Python pour les débutants',
      description: 'Initiez-vous à la programmation avec Python.',
      imageUrl: 'Python-Logo.png' // Ajoute une URL d'image ici
    },
    {
      name: 'Introduction à Design UX/UI',
      description: 'Apprenez à concevoir des interfaces utilisateur intuitives et esthétiques.',
      imageUrl: 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png' // Ajoute une URL d'image ici
    },
    {
      name: 'Gestion de Projet Agile',
      description: 'Maîtrisez les méthodes agiles comme Scrum et Kanban pour une gestion efficace des projets.',
      imageUrl: 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png' // Ajoute une URL d'image ici
    },
    {
      name: 'Développement Mobile',
      description: 'Créez des applications performantes pour Android et iOS avec Flutter et React Native.',
      imageUrl: 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png' // Ajoute une URL d'image ici
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
