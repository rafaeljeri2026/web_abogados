import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceItem, SubserviceItem } from '../../site-content';


@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.component.css'
})
export class Privacidad {
  @Input({ required: true }) service!: ServiceItem;


}
