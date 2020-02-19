import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseByTagPageRoutingModule } from './choose-by-tag-routing.module';

import { ChooseByTagPage } from './choose-by-tag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseByTagPageRoutingModule
  ],
  declarations: [ChooseByTagPage]
})
export class ChooseByTagPageModule {}
