import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICES, ServiceItem } from '../../site-content';
import { ContactApiService } from '../../services/contact-api.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent {
  readonly service: ServiceItem;
  readonly phoneHref = 'tel:617262935';
  readonly whatsappHref =
    'https://wa.me/34617262935?text=Hola%2C%20quiero%20hacer%20una%20consulta%20jur%C3%ADdica';
  sending = false;
  sent = false;
  showSuccessPopup = false;
  errorMessage = '';
  acceptedPolicy = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(
    route: ActivatedRoute,
    private readonly router: Router,
    private readonly contactApi: ContactApiService
  ) {
    const slug = route.snapshot.paramMap.get('slug');
    const service = slug ? SERVICES.find((item) => item.slug === slug) : undefined;

    if (!service) {
      void this.router.navigate(['/servicios']);
      this.service = SERVICES[0];
      return;
    }

    this.service = service;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  submitForm(): void {
    if (!this.acceptedPolicy) {
      return;
    }

    this.sending = true;
    this.sent = false;
    this.errorMessage = '';

    this.contactApi.sendRequest({
      Correo: this.formData.email.trim(),
      NombreCompleto: this.formData.name.trim(),
      Telefono: this.formData.phone.trim(),
      Servicio: this.service.title,
      Mensaje: this.formData.message.trim()
    }).subscribe({
      next: () => {
        this.sent = true;
        this.showSuccessPopup = true;
        this.sending = false;
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
        this.acceptedPolicy = false;
      },
      error: (error) => {
        this.sending = false;
        this.showSuccessPopup = false;
        this.errorMessage = error?.error?.error || 'No se pudo enviar el mensaje.';
      }
    });
  }

  dismissSuccessPopup(): void {
    this.showSuccessPopup = false;
    this.sent = false;
  }
}
