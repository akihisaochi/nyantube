import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerchPage } from './serch';

@NgModule({
  declarations: [
    SerchPage,
  ],
  imports: [
    IonicPageModule.forChild(SerchPage),
  ],
})
export class SerchPageModule {}
