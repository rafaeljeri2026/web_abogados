import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { MatrimonialFamilyPageComponent } from './pages/matrimonial-family-page/matrimonial-family-page.component';
import { HerenciasPageComponent } from './pages/herencias-page/herencias-page.component';
import { ArrendamientosPageComponent } from './pages/arrendamientos-page/arrendamientos-page.component';
import { AccidentesPageComponent } from './pages/accidentes-page/accidentes-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios/matrimonial-y-familia', component: MatrimonialFamilyPageComponent },
  { path: 'servicios/herencias', component: HerenciasPageComponent },
  { path: 'servicios/arrendamientos', component: ArrendamientosPageComponent },
  { path: 'servicios/accidentes', component: AccidentesPageComponent },
  { path: 'servicios', component: ServicesListComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
