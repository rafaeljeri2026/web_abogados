import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SERVICES } from '../../site-content';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent {
  readonly services = SERVICES;
}
