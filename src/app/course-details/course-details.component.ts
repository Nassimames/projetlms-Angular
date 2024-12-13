import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Pour récupérer l'ID du cours à partir de la route
import { RouterModule } from '@angular/router'; // Importer le RouterModule
import { CommonModule } from '@angular/common'; // Importer CommonModule
@Component({
  selector: 'app-course-details',
  standalone: true,  // Laisser le composant autonome
  imports: [MatIconModule, RouterModule,CommonModule],  // Importation des modules nécessaires
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  isMenuOpen: boolean = false;
  courseId!: string;  // Variable pour stocker l'ID du cours
  courseName: string = 'Angular Basics';
  courseDescription: string = 'Ce cours couvre les concepts fondamentaux d\'Angular, comme les composants, les directives, et la gestion des routes.';
  courseDuration: string = '30 heures';
  courseLevel: string = 'Intermédiaire';
  coursePrerequisites: string = 'Connaissance de base en JavaScript et HTML';
  courseContent: string[] = [
    'Introduction à Angular',
    'Création de composants',
    'Directives et pipes',
    'Routing dans Angular',
    'Services et Dependency Injection',
    'Gestion des formulaires',
    'Communiquer avec des APIs'
  ];

  constructor(private route: ActivatedRoute) {}  // Injecter ActivatedRoute pour accéder aux paramètres de la route

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id') || '';  // Assurez-vous que vous récupérez le bon paramètre
    console.log('ID du cours récupéré:', this.courseId);  // Vérifiez l'ID récupéré dans la console
    
  
    // Exemple de récupération du nom du cours selon l'ID
    const courses = [
      { id: '1', name: 'Angular Basics' },
      { id: '2', name: 'Advanced Angular' },
    ];
  
    const course = courses.find(c => c.id === this.courseId);
    if (course) {
      console.log('Cours trouvé :', course.name);  // Vérifiez si le cours est trouvé
      this.courseName = course.name;
    } else {
      console.log('Cours non trouvé');
      this.courseName = 'Cours non trouvé';
    }
  }
  
}
