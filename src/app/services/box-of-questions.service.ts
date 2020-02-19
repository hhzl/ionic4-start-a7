import { Injectable } from '@angular/core';
import { LWdbService } from './lwdb.service';
import { DataService } from './data.service';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})

export class BoxOfQuestionsService {

  private testFlag : number = 0;

  lwDB : LWdbService;
  service : SettingsService;
  data : DataService;
  numberOfLetters : number = 5;

  private selectedIndex : number = 0;
  private selectedItems : Array<any>;

  public numberOfItems: number = 0;

  mode : string = 'linear';   // shortwords, smallSelection, learnmode, practicemode




  constructor(lwDBservice: LWdbService, d : DataService, s : SettingsService) { 
     // initialize selectedItems to all items available
     this.data = d;
     this.service = s;
     this.lwDB = lwDBservice; 
     this.selectAllItems();
  }  



  selectAllItems() {
    this.selectedItems = this.data.items;
    this.selectedIndex = 0;
    if (this.service.settings.useBasicSelection) { 
        console.log('use only basic selection -- to implement');
        }
    this.limitSelectionIfLabelInSecondLanguageIsRequested();
    this.numberOfItems = this.selectedItems.length;
    return this.getSelectedItems();
  }


 limitSelectionIfLabelInSecondLanguageIsRequested() {
    var itemsWithFirstAndSecondLanguage : Array<any> = [];
    var lang2Abrev = this.service.getLanguageAbreviation(this.service.settings.language2);
    var item : any;

    if (this.service.settings.includePicturesWithNoLabel) { // no action
        }
    else { // only include pictures which have a label in a second language
      for (item of this.selectedItems)
         if (item.en) { // one of the data structure formats
             if ((item[lang2Abrev]).length > 0) {itemsWithFirstAndSecondLanguage.push(item) }
             }
         else {// the test data, just choose all items
              itemsWithFirstAndSecondLanguage.push(item)}
         ;
      console.log('limitSelectionIfLabelInSecondLanguageIsRequested: ' + itemsWithFirstAndSecondLanguage.length);
      this.selectedItems = itemsWithFirstAndSecondLanguage;
    }
  }





  getSelectedItems() {
    return this.selectedItems;
  }





  allItemsFilteredByTag(tag) {
               console.log('allItemsFilteredByTag(' + tag + ')');
			if(tag == "")
			{
				//no tag, return all items
		                return this.selectAllItems()		
			}
			else
			{
				return this.itemsByTag(this.selectAllItems(), tag);
			}

		}




  itemsByTag(itemsToFilter, tag){

			function hasThisTag(anItem) {
				var arrTags = anItem.tags.split(' ');
				return (arrTags.indexOf(tag) >= 0);
			}

                        this.setSelectedIndex(0);
                        this.selectedItems = (itemsToFilter).filter(hasThisTag);
                        console.log('number of selected items: ' + this.selectedItems.length);
			return this.selectedItems;
		}






  nextItem() {
    if (this.testFlag == 1) {console.log('nextItem');}; 
    this.selectedIndex = this.selectedIndex + 1;
    var n = this.selectedItems.length;
    if (this.selectedIndex == n) {this.selectedIndex = 0};
    return this.currentItem(); 
  }



  prevItem() {
    if (this.testFlag == 1) {console.log('prevItem');}; 
    this.selectedIndex = this.selectedIndex - 1;
    var n = this.selectedItems.length;
    if (this.selectedIndex == -1) {this.selectedIndex = n -1};
    return this.currentItem(); 
  }


  setSelectedIndex(n : number) {
    this.selectedIndex = n;
  }







  currentItem() {
    var item = this.selectedItems[this.selectedIndex]; 
    if (this.testFlag == 1) {console.log('box-of-questions.service : ' + this.selectedIndex + ' : ' + item.en)}; 
    
    if (this.testFlag == 1) {console.log(item)};
    return item; 
  }


  getRandomItem(){
                return this.selectedItems[this._getRandomInt(0,this.selectedItems.length-1)];
  };




  _getRandomInt(min, max){
             // Returns a random integer between min (inclusive) and max (inclusive)
             // Using Math.round() will give you a non-uniform distribution!
             
    		return Math.floor(Math.random() * (max - min + 1)) + min;
  };



  // randomize was called _shuffle before
  _randomize(arr : Array<any>) {
		    var j, x, i;
		    for (i = arr.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = arr[i - 1];
		        arr[i - 1] = arr[j];
		        arr[j] = x;
		    }
                    return arr;		   
	};



public optionsToChoose(){
// public choices : Array<any> = 

// return test data; TODO finish implementation

return [
   {
      "_id":121,
      "word":"butterfly",
      "picture":"121.jpg",
   },   {
      "_id":15,
      "word":"parrot",
      "picture":"15.jpg",
   },
   {
      "_id":35,
      "word":"rabbit",
      "picture":"35.jpg",
   },
   {
      "_id":42,
      "word":"palm tree",
      "picture":"42.jpg",
   },
];

  };




}
