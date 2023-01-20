import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent {
  formPreguntas!:FormGroup;
//5. import MAT_DIALOG_DATA
//6. injectar data
  constructor( @Inject(MAT_DIALOG_DATA) public data:{usuario:string} , private formPreguntaBuilder:FormBuilder, private datausuario:UsuarioService){
    this.formPreguntas=formPreguntaBuilder.group({
      color:['',
      [
        Validators.required
      ]  
      ],
      animalito:['',
      [
        Validators.required
      ]
      ]
    });
  }
  guardarRespuestas(){
    if(this.formPreguntas.valid){
      this.datausuario.Usuario.push({nombre:this.data.usuario, color:this.formPreguntas.get('color')?.value, animalito:this.formPreguntas.get('animalito')?.value})
    }
  }
  validacion(name: string) {
    return this.formPreguntas.get(name)?.errors && this.formPreguntas.get(name)?.touched
  }
}
