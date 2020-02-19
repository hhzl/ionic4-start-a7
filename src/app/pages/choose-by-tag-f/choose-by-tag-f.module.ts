import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseByTagFPageRoutingModule } from './choose-by-tag-f-routing.module';

import { ChooseByTagFPage } from './choose-by-tag-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseByTagFPageRoutingModule
  ],
  declarations: [ChooseByTagFPage]
})
export class ChooseByTagFPageModule {}
