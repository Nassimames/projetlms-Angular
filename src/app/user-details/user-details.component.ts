import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user = {
    name: 'Nassima',
    email: 'mesbahnassima0@gmail.com',
    phone: '+123456789',
    address: '123, Rue , V, maroc',
    profilePicture: 'assets/profile-picture.jpg'
  };
}
