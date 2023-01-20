import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogUserComponent } from '../componentes/dialog-user/dialog-user.component';



@NgModule({
  declarations: [
    HomeDashboardComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MaterialModule, //modulo material
    ReactiveFormsModule
  ],exports:[
    HomeDashboardComponent,
    UserComponent
  ],
  entryComponents:[ //4.
    DialogUserComponent
  ]
})
export class PagesModule { }
