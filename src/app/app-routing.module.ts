import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { BadgesComponent } from './badges/badges.component'; // Import du composant BadgesComponent
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirection vers login par défaut
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'badges', component: BadgesComponent },
  
  // Routes pour les composants principaux
  { path: 'courses', component: CourseListComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'user-details', component: UserDetailsComponent },

  // Route avec LayoutComponent qui sert de wrapper pour les pages principales
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
      { path: 'user-details', component: UserDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
