import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
{path: '', component:InformacionPersonalComponent},
{path: 'habilidades', component: HabilidadesComponent},
{path: 'experiencia', component: ExperienciaComponent }, 
{path: 'educacion', component: EducacionComponent},
{path: 'portafolio', component: PortafolioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
