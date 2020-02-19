import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { BoxOfQuestionsService } from '../../services/box-of-questions.service';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

 navCtrl: NavController; 
 service: SettingsService;
 boxOfQuestions: BoxOfQuestionsService;
 useThirdLanguageCheckBox = false;
 useBasicSelectionCheckBox = false;
 
 includePicturesWithNoLabelCheckBox = false;

 constructor(n: NavController, s: SettingsService, b: BoxOfQuestionsService) {
     this.navCtrl = n;
     this.service = s;
     this.boxOfQuestions = b;        
     this.useThirdLanguageCheckBox = this.service.settings.useThirdLanguage;
     this.useBasicSelectionCheckBox = this.service.settings.useBasicSelection;
     this.boxOfQuestions.selectAllItems();
     console.log('constructor settings-page this.useThirdLanguageCheckBox =' + this.useThirdLanguageCheckBox);
this.includePicturesWithNoLabelCheckBox = this.service.settings.includePicturesWithNoLabel;

 }

 ngOnInit() {
 }

// https://blog.ionicframework.com/navigating-lifecycle-events/

 setLanguage(n) {
  console.log('settings.page: setLanguage '+ n + ' (one less)');
  this.service.setSelectedLanguageNo(n);
  console.log('settings.page: selectedLanguage: ' + this.service.selectedLanguage);
  this.navCtrl.navigateForward('/language-selection')
  this.boxOfQuestions.selectAllItems();

 }


 useThirdLanguage(e): void {
  	console.log('settings-page ' + e.currentTarget.checked);	
        this.service.setUseThirdLanguage(e.currentTarget.checked);
        this.useThirdLanguageCheckBox = e.currentTarget.checked;
 }




 includePicturesWithNoLabel(e): void {
  	console.log('settings-page ' + e.currentTarget.checked);	
        this.service.setIncludePicturesWithNoLabel(e.currentTarget.checked);
        this.boxOfQuestions.selectAllItems();
        this.includePicturesWithNoLabelCheckBox = e.currentTarget.checked;
 }



 useBasicSelection(e): void {
  	console.log('settings-page useBasicSelection' + e.currentTarget.checked);	
        this.service.setUseBasicSelection(e.currentTarget.checked);
        this.boxOfQuestions.selectAllItems();
        this.useBasicSelectionCheckBox = e.currentTarget.checked;
 }



}
