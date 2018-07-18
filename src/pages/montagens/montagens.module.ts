import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MontagensPage } from './montagens';

@NgModule({
  declarations: [
    MontagensPage,
  ],
  imports: [
    IonicPageModule.forChild(MontagensPage),
  ],
})
export class MontagensPageModule {}
