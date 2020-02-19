import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseByTagAPageRoutingModule } from './choose-by-tag-a-routing.module';

import { ChooseByTagAPage } from './choose-by-tag-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseByTagAPageRoutingModule
  ],
  declarations: [ChooseByTagAPage]
})
export class ChooseByTagAPageModule {}
