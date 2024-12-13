import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatIconModule, CommonModule, LayoutComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonth: string = 'December';
  currentYear: number = 2024;
  days: (number | null)[] = [];
  hoveredDay: number | null = null;  // Variable pour stocker le jour survolé
  events: { [key: number]: string } = {
    5: 'Cours de mathématiques',
    12: 'Réunion projet',
    18: 'Cours de physique',
    22: 'Atelier Angular'
  }; // Exemple d'événements associés à des jours spécifiques

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentIndex = months.indexOf(this.currentMonth);
    const numDays = new Date(this.currentYear, currentIndex + 1, 0).getDate(); // Nombre de jours du mois
    const firstDay = new Date(this.currentYear, currentIndex, 1).getDay(); // Jour de la semaine du 1er du mois

    this.days = [];
    // Ajouter des espaces vides pour les jours avant le 1er du mois
    for (let i = 0; i < firstDay; i++) {
      this.days.push(null);
    }
    // Ajouter les jours du mois
    for (let i = 1; i <= numDays; i++) {
      this.days.push(i);
    }
  }

  changeMonth(direction: 'prev' | 'next') {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentIndex = months.indexOf(this.currentMonth);
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0) {
      newIndex = 11; // Décembre
      this.currentYear--;
    } else if (newIndex > 11) {
      newIndex = 0; // Janvier
      this.currentYear++;
    }

    this.currentMonth = months[newIndex];
    this.updateCalendar(); // Mettre à jour les jours du mois
  }

  // Vérifier si un jour particulier a un événement
  isEvent(day: number): boolean {
    return this.events.hasOwnProperty(day);
  }

  // Obtenir la description de l'événement pour un jour donné
  getEventDescription(day: number): string {
    return this.events[day];
  }

  // Montrer l'événement lors du survol d'un jour
  showEventInfo(day: number) {
    if (this.isEvent(day)) {
      this.hoveredDay = day;
    }
  }

  // Cacher l'événement lorsque la souris quitte le jour
  hideEventInfo() {
    this.hoveredDay = null;
  }
}
