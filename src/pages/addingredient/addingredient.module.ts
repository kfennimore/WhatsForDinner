import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddingredientPage } from './addingredient';

@NgModule({
  declarations: [
    AddingredientPage,
  ],
  imports: [
    IonicPageModule.forChild(AddingredientPage),
  ],
})
export class AddingredientPageModule {}
