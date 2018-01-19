import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendquestionPage } from './sendquestion';

@NgModule({
  declarations: [
    SendquestionPage,
  ],
  imports: [
    IonicPageModule.forChild(SendquestionPage),
  ],
})
export class SendquestionPageModule {}
