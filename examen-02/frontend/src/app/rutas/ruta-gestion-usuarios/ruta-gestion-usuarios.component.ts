import {Component, OnInit} from '@angular/core';
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  columnas = [
    {field: 'id', header: 'Identificador'},
    {field: 'nombre', header: 'Nombre'},
    {field: 'correo', header: 'Correo'},
    {field: 'password', header: 'Contraseña'},
    {field: 'id', header: 'Acciones'},
  ];

  // Inyeccion de Dependencias
  constructor(
    private readonly _usuarioRestService: UsuarioRestService
  ) {

  }

  ngOnInit() {
    // CUANDO ESTA LISTO EL WEB COMPONENT PARA MOSTRARSE
    const usuarios$ = this._usuarioRestService.findAll();

    usuarios$
      .subscribe(
        (usuarios: Usuario[]) => {
          console.log(usuarios);
          this.usuarios = usuarios;
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }


  eliminar(usuario: Usuario) {

    const usuarioEliminado$ = this._usuarioRestService.delete(usuario.id);

    usuarioEliminado$
      .subscribe(
        (usuarioEliminado: Usuario) => {
          console.log('Se elimino:', usuarioEliminado);

          const indice = this.usuarios
            .findIndex((r) => r.id === usuario.id);

          this.usuarios.splice(indice, 1);

        },
        (error) => {
          console.error('Error', error);
        }
      );


  }

}



