import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseByTagPage } from './choose-by-tag.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseByTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseByTagPageRoutingModule {}
