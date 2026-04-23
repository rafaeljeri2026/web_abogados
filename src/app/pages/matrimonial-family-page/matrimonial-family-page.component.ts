import { Component } from '@angular/core';
import { SERVICES } from '../../site-content';
import { ServicePageComponent } from '../service-page/service-page.component';

@Component({
  selector: 'app-matrimonial-family-page',
  standalone: true,
  imports: [ServicePageComponent],
  template: `<app-service-page [service]="service"></app-service-page>`
})
export class MatrimonialFamilyPageComponent {
  readonly service = SERVICES.find((item) => item.slug === 'matrimonial-y-familia') ?? SERVICES[0];
}
