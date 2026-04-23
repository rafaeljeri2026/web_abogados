import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ABOUT_LINKS, LEGAL_LINKS, SEO_LINKS, TOP_MENU } from './site-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly whatsappHref =
    'https://wa.me/34617262935?text=Hola%2C%20quiero%20hacer%20una%20consulta%20jur%C3%ADdica';
  readonly phoneHref = 'tel:617262935';
  readonly emailHref = 'mailto:lydiagarciaalvarez@yahoo.es';
  readonly topMenu = TOP_MENU;
  readonly aboutLinks = ABOUT_LINKS;
  readonly legalLinks = LEGAL_LINKS;
  readonly seoLinks = SEO_LINKS;
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
