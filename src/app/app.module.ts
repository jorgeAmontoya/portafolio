import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HabilidadesComponent,
    InformacionPersonalComponent,
    NavbarComponent,
    ExperienciaComponent,
    EducacionComponent,
    PortafolioComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:InformacionPersonalComponent},
      {path: 'habilidades', component: HabilidadesComponent},
{path: 'experiencia', component: ExperienciaComponent }, 
{path: 'educacion', component: EducacionComponent},
{path: 'portafolio', component: PortafolioComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
