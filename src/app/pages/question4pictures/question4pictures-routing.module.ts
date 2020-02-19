import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question4picturesPage } from './question4pictures.page';

const routes: Routes = [
  {
    path: '',
    component: Question4picturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question4picturesPageRoutingModule {}
