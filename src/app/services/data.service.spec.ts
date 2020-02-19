import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });


  it('should have test data', () => {
    const service: DataService = TestBed.get(DataService);
    var testitems: Array<any> = [];
    
    if (service.items[0].word == 'apple') { // test data under 'items'
        testitems = service.items; 
        expect(testitems.length).toBe(29);      
    };

    

  });



});
