import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseByTagFPage } from './choose-by-tag-f.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseByTagFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseByTagFPageRoutingModule {}
