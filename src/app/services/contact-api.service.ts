import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface ContactRequest {
  Correo: string;
  NombreCompleto: string;
  Telefono?: string;
  Servicio?: string;
  Mensaje?: string;
  [key: string]: unknown;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
  inner?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.apiBaseUrl}/Notificaciones/confirmacion`;

  sendRequest(payload: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, payload);
  }
}
