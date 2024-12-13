import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordCodeComponent } from './reset-password-code/reset-password-code.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CalendarComponent } from './calendar/calendar.component'; // Assurez-vous que le composant existe

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:code', component: ResetPasswordCodeComponent },
  { path: 'calendar', component: CalendarComponent },
  
  // Route par défaut pour le composant Home
  { path: '', component: HomeComponent },

  // Route dynamique pour afficher les détails d'un cours
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'course-details', component: CourseDetailsComponent }, 
  { path: 'user-details', component: UserDetailsComponent }, // Route pour les détails utilisateur
  

  {
    path: '',
    component: LayoutComponent,  // Utilisation du LayoutComponent pour toutes les pages qui partagent la même structure
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
