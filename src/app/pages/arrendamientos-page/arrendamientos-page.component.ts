import { Component } from '@angular/core';
import { SERVICES } from '../../site-content';
import { ServicePageComponent } from '../service-page/service-page.component';

@Component({
  selector: 'app-arrendamientos-page',
  standalone: true,
  imports: [ServicePageComponent],
  template: `<app-service-page [service]="service"></app-service-page>`
})
export class ArrendamientosPageComponent {
  readonly service = SERVICES.find((item) => item.slug === 'arrendamientos') ?? SERVICES[2];
}
