import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordCodeComponent } from './reset-password-code/reset-password-code.component';
import { HomeComponent } from './home/home.component';  // Assure-toi d'importer le composant
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CalendarComponent } from './calendar/calendar.component'; // Importez le composant du calendrier



export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent }, // Définissez la route pour Calendrier
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reset-password/:code', component: ResetPasswordCodeComponent },
  { path: 'reset-password/:code', component: ResetPasswordCodeComponent },
  { path: 'courses', component: CourseListComponent},
  {
    path: '',
    component: LayoutComponent,  // Utilisation du LayoutComponent pour toutes les pages qui partagent la même structure
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
      { path: 'user-details', component: UserDetailsComponent },
    ]
  }

];


console.log('Routes configurées :', routes);
