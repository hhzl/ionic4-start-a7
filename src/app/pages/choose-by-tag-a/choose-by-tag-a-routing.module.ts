import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseByTagAPage } from './choose-by-tag-a.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseByTagAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseByTagAPageRoutingModule {}
