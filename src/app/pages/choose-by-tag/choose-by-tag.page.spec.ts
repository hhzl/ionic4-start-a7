import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { ChooseByTagPage } from './choose-by-tag.page';

describe('ChooseByTagPage', () => {
  let component: ChooseByTagPage;
  let fixture: ComponentFixture<ChooseByTagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseByTagPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseByTagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
