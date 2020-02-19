import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question4picturesPageRoutingModule } from './question4pictures-routing.module';

import { Question4picturesPage } from './question4pictures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question4picturesPageRoutingModule
  ],
  declarations: [Question4picturesPage]
})
export class Question4picturesPageModule {}
