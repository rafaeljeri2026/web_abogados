import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceItem, SubserviceItem } from '../../site-content';


@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avisolegal.html',
  styleUrl: './avisolegal.component.css'
})
export class AvisoLegal {
  @Input({ required: true }) service!: ServiceItem;


}
