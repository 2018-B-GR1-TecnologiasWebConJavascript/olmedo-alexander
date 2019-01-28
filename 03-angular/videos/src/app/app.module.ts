import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {Ruta404Component} from './rutas/ruta404/ruta404.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionProductosComponent} from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {UsuarioServiceService} from './servicios/usuario-service.service';
import {RutaVerDetalleUsuarioComponent} from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import {RazaRestService} from './servicios/rest/raza-rest.service';
import {RutaCrearRazaComponent} from './rutas/ruta-crear-raza/ruta-crear-raza.component';
import {FormsModule} from '@angular/forms';
import {RutaActualizarRazaComponent} from './rutas/ruta-actualizar-raza/ruta-actualizar-raza.component';
import {ImagenPeliculaComponent} from './componentes/imagen-pelicula/imagen-pelicula.component';
import {FormularioRazaComponent} from './componentes/formulario-raza/formulario-raza.component';
import {LoginComponent} from './componentes/login/login.component';
import {AuthService} from './servicios/rest/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule, ChartModule, InputTextModule, MessageModule, MessagesModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaPerfilComponent,
    Ruta404Component,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent,
    RutaVerDetalleUsuarioComponent,
    RutaCrearRazaComponent,
    RutaActualizarRazaComponent,
    ImagenPeliculaComponent,
    FormularioRazaComponent,
    LoginComponent
  ],  // Components
  imports: [
    BrowserModule, // -> NGIF NGFOR NGCLASS ....
    AppRoutingModule,
    HttpClientModule,  // Acceso a un servicio HttpClient
    FormsModule,
    BrowserAnimationsModule, // Animaciones
    ButtonModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    CardModule,
    ChartModule
  ],  // Modulos
  providers: [
    UsuarioServiceService,
    RazaRestService,
    AuthService
  ], // Servicios
  bootstrap: [AppComponent] // Componente Principal
})
export class AppModule {
}


/*

-> Componente Principal

  <router-outlet></router-outlet>
    -> *Inicio  -> inicio
    -> *Login
    -> *Perfil
    -> *Menu -> menu/

     <router-outlet></router-outlet>
        -> Gestion Usuarios ->

            <router-outlet></router-outlet>
            menu/gestion-usuarios/crear-usuarios
            -> Crear usuarios
            -> Actualizar Usuarios

        -> Gestion Productos

            -> Crear productos
            -> Actualizar productos


    -> *404 -> Not Found

*
* */
