import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from 'src/app/componentes/dialog-user/dialog-user.component';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  formnombre!:FormGroup;
  //2. constructor
  constructor(private matdialog : MatDialog, public datausuario: UsuarioService , private formnombrebuilder :FormBuilder){
    this.formnombre=formnombrebuilder.group({
      nombre:['',
        [
          Validators.required
        ]
      ]
    })
  }
  
  //3. funcion
  openDialog(){
    //abro el componente
    this.matdialog.open(DialogUserComponent,{data:
      {usuario:this.formnombre.get('nombre')?.value}
    })
    this.formnombre.reset();
  }
  validacion(name: string) {
    return this.formnombre.get(name)?.errors && this.formnombre.get(name)?.touched
  }
}