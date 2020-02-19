import { Component, OnInit } from '@angular/core';
import { BoxOfQuestionsService } from '../../services/box-of-questions.service';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-question4pictures',
  templateUrl: './question4pictures.page.html',
  styleUrls: ['./question4pictures.page.scss'],
})
export class Question4picturesPage implements OnInit {

public word : string = 'word';
public indexOfWordToAsk : number = 1;



 constructor(public box: BoxOfQuestionsService, public settings: SettingsService) {
    this.indexOfWordToAsk = Math.floor(Math.random() * 4);   
}

  ngOnInit() {
  }

  click(n) {
    if (n == this.indexOfWordToAsk) {
    console.log(n + " ok")}
    else {
    console.log(n + " nok")}
  }

  public choices() {
    return this.box.optionsToChoose();
  }



  public wordToAsk() {
    return (this.choices()[this.indexOfWordToAsk]).word;
  }


}
