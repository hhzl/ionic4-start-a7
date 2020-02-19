import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { BoxOfQuestionsService } from '../../services/box-of-questions.service';


@Component({
  selector: 'app-choose-by-tag-f',
  templateUrl: './choose-by-tag-f.page.html',
  styleUrls: ['./choose-by-tag-f.page.scss'],
})
export class ChooseByTagFPage implements OnInit {


constructor(public navCtrl: NavController, public service: BoxOfQuestionsService) {
 }



ngOnInit() {
  }



allItemsFilteredByTag(tag) {
   console.log('choose-by-tag-f : allItemsFilteredByTag(' + tag +')');
   this.service.mode = 'linear';
   this.service.allItemsFilteredByTag(tag);
   this.navCtrl.navigateForward('/picture-with-labels');
   
}


}
