import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { ChooseByTagAPage } from './choose-by-tag-a.page';

describe('ChooseByTagAPage', () => {
  let component: ChooseByTagAPage;
  let fixture: ComponentFixture<ChooseByTagAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseByTagAPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseByTagAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
