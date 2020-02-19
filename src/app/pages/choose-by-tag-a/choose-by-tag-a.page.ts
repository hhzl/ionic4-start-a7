import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { BoxOfQuestionsService } from '../../services/box-of-questions.service';


@Component({
  selector: 'app-choose-by-tag-a',
  templateUrl: './choose-by-tag-a.page.html',
  styleUrls: ['./choose-by-tag-a.page.scss'],
})
export class ChooseByTagAPage implements OnInit {

constructor(public navCtrl: NavController, public service: BoxOfQuestionsService) {
 }


ngOnInit() {
  }


allItemsFilteredByTag(tag) {
   console.log('allItemsFilteredByTag(' + tag +')');
   this.service.mode = 'linear';
   this.service.allItemsFilteredByTag(tag);
   this.navCtrl.navigateForward('/picture-with-labels');
   
}


}
