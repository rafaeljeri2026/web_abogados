import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeMenuHref = '#hero';

  readonly menu = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Conócenos', href: '#conocenos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Blog', href: '#noticias' },
    { label: 'Contacto', href: '#contacto' }
  ];

  readonly conocenosLinks = [
    { label: 'Galería de imágenes', href: '#galeria' },
    { label: 'Galería de vídeos', href: '#videos' },
    { label: 'Saber Más', href: '#noticias' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Tour virtual', href: '#tour-virtual' }
  ];

  readonly conocenosCards = [
    { titulo: 'Galería de imágenes', img: 'assets/site/galeria01.webp' },
    { titulo: 'Saber Más', img: 'assets/site/galeria03.webp' },
    { titulo: 'Noticias', img: 'assets/site/galeria02.webp' }
  ];

  readonly servicios = [
    { titulo: 'Matrimonial y Familia', img: 'assets/site/servicio1.jpg' },
    { titulo: 'Violencia de género', img: 'assets/site/servicio2.jpg' },
    { titulo: 'Herencias', img: 'assets/site/servicio3.jpg' },
    { titulo: 'Accidentes', img: 'assets/site/hero.jpg' },
    { titulo: 'Reclamación de gastos hipotecarios', img: 'assets/site/servicio4.jpg' },
    { titulo: 'Impagados', img: 'assets/site/servicio5.jpg' },
    { titulo: 'Incapacidades', img: 'assets/site/servicio6.jpg' },
    { titulo: 'Arrendamientos', img: 'assets/site/servicio7.jpg' },
    { titulo: 'Penal', img: 'assets/site/servicio8.jpg' },
    { titulo: 'Concurso de acreedores', img: 'assets/site/servicio9.jpg' }
  ];

  readonly galeria = [
    { titulo: 'Asesoramiento jurídico eficaz', img: 'assets/site/galeria01.webp' },
    { titulo: 'Demandas de divorcio en Oviedo', img: 'assets/site/galeria02.webp' },
    { titulo: 'Abogada con alto nivel de cualificación y mucha experiencia', img: 'assets/site/galeria03.webp' },
    { titulo: 'Lydia García, abogada', img: 'assets/site/galeria04.webp' },
    { titulo: 'Abogados especialistas en arrendamientos en Oviedo', img: 'assets/site/galeria05.webp' },
    { titulo: 'Abogados especialistas en accidentes de tráfico en Oviedo', img: 'assets/site/galeria06.webp' },
    { titulo: 'Abogado concursal en Oviedo', img: 'assets/site/galeria07.webp' },
    { titulo: 'Abogado especialista en divorcios en Oviedo', img: 'assets/site/galeria08.webp' },
    { titulo: 'Nulidades matrimoniales en Oviedo', img: 'assets/site/galeria09.webp' },
    { titulo: 'Abogado especialista en separaciones en Oviedo', img: 'assets/site/galeria10.webp' },
    { titulo: 'Reclamación de seguros en Oviedo', img: 'assets/site/galeria11.webp' }
  ];

  readonly noticias = [
    { titulo: 'Póngase en contacto con nosotros', img: 'assets/site/galeria04.webp' },
    { titulo: 'Asesoramiento jurídico eficaz', img: 'assets/site/galeria05.webp' }
  ];

  readonly opiniones = [
    'Escribir opinión en Google',
    'Escribir opinión en Facebook'
  ];

  readonly legalLinks = [
    'Aviso legal',
    'Política de privacidad',
    'Política de cookies',
    'Declaración accesibilidad',
    'Política de envío y devoluciones'
  ];

  readonly seoLinks = [
    'Abogados de herencias en Oviedo',
    'Abogados para accidentes de tráfico en Oviedo',
    'Abogado concursal Oviedo',
    'Reclamación seguros Oviedo',
    'Abogados de accidentes en Oviedo',
    'Abogados arrendamientos Oviedo',
    'Abogados de divorcios en Oviedo',
    'Abogados especialistas en alquileres Oviedo',
    'Abogados matrimonialistas Oviedo',
    'Abogados separaciones Oviedo',
    'Demandas de divorcio Oviedo',
    'Nulidades matrimoniales Oviedo'
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const sections = this.menu
      .map((item) => item.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const marker = 130;
    let current = '#hero';

    for (const section of sections) {
      if (section.offsetTop <= window.scrollY + marker) {
        current = `#${section.id}`;
      }
    }

    this.activeMenuHref = current;
  }

  setActive(href: string): void {
    this.activeMenuHref = href;
  }
}
