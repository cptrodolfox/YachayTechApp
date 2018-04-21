import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventItemPage } from './event-item';

@NgModule({
  declarations: [
    EventItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EventItemPage),
  ],
})
export class EventItemPageModule {}
