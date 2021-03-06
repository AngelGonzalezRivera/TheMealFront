import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [PerfilComponent],
  imports: [CommonModule, PerfilRoutingModule, MaterialModule]
})
export class PerfilModule { }
