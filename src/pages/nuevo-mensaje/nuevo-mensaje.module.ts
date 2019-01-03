import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMensajePage } from './nuevo-mensaje';

@NgModule({
  declarations: [
    NuevoMensajePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMensajePage),
  ],
})
export class NuevoMensajePageModule {}
