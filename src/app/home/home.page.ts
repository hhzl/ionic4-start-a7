import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { BoxOfQuestionsService } from '../services/box-of-questions.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  service : SettingsService;
  boxOfQuestions: BoxOfQuestionsService;

  constructor(settings: SettingsService, b: BoxOfQuestionsService) {
                   this.service = settings;
                   this.boxOfQuestions = b;
                   console.log('home.page constructor - settings made available');
  }

  ionViewWillEnter(){
   this.boxOfQuestions.selectAllItems();
 }

}
