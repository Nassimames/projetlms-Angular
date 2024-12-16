import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule,MatIconModule],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
  completedCourses = [
    { title: 'Course 1', badge: 'badge-1.png' },
    { title: 'Course 2', badge: 'badge-2.png' },
    { title: 'Course 3', badge: 'badge-3.png' },
  ];

  constructor(private route: ActivatedRoute) {}
}
