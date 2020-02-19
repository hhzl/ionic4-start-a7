import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { BoxOfQuestionsService } from '../../services/box-of-questions.service';

@Component({
  selector: 'app-choose-by-tag',
  templateUrl: './choose-by-tag.page.html',
  styleUrls: ['./choose-by-tag.page.scss'],
})
export class ChooseByTagPage implements OnInit {


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
