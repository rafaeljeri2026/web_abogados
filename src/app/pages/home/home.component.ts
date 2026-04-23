import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT_LINKS, GALLERY, LEGAL_LINKS, NEWS, SEO_LINKS, SERVICES } from '../../site-content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly email = 'lydiagarciaalvarez@yahoo.es';
  readonly whatsappHref =
    'https://wa.me/34617262935?text=Hola%2C%20quiero%20hacer%20una%20consulta%20jur%C3%ADdica';
  readonly phoneHref = 'tel:617262935';
  readonly emailHref = 'mailto:lydiagarciaalvarez@yahoo.es';
  readonly services = SERVICES;
  readonly gallery = GALLERY;
  readonly news = NEWS;
  readonly aboutLinks = ABOUT_LINKS;
  readonly legalLinks = LEGAL_LINKS;
  readonly seoLinks = SEO_LINKS;

  selectedImage: { title: string; img: string } | null = null;
  copiedEmail = false;

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.selectedImage = null;
  }

  openImage(item: { title: string; img: string }): void {
    this.selectedImage = item;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copiedEmail = true;
      window.setTimeout(() => {
        this.copiedEmail = false;
      }, 2000);
    } catch {
      this.copiedEmail = false;
    }
  }
}
