import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { Question4picturesPage } from './question4pictures.page';

describe('Question4picturesPage', () => {
  let component: Question4picturesPage;
  let fixture: ComponentFixture<Question4picturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question4picturesPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Question4picturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
