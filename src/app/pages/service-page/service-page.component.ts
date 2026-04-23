import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceItem, SubserviceItem } from '../../site-content';
import { ContactApiService } from '../../services/contact-api.service';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  @Input({ required: true }) service!: ServiceItem;

  readonly phoneHref = 'tel:617262935';
  readonly whatsappHref =
    'https://wa.me/34617262935?text=Hola%2C%20quiero%20hacer%20una%20consulta%20jur%C3%ADdica';
  selectedSubservice: SubserviceItem | null = null;
  contactModalOpen = false;
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

  constructor(private readonly contactApi: ContactApiService) {}

  openContact(subservice: SubserviceItem): void {
    this.selectedSubservice = subservice;
    this.contactModalOpen = true;
    this.sending = false;
    this.sent = false;
    this.showSuccessPopup = false;
    this.errorMessage = '';
    this.acceptedPolicy = false;
  }

  closeContact(): void {
    this.contactModalOpen = false;
    this.selectedSubservice = null;
    this.sending = false;
    this.sent = false;
    this.showSuccessPopup = false;
    this.errorMessage = '';
    this.acceptedPolicy = false;
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
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
      Servicio: this.selectedSubservice ? `${this.service.title} - ${this.selectedSubservice.title}` : this.service.title,
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
    this.closeContact();
  }
}
