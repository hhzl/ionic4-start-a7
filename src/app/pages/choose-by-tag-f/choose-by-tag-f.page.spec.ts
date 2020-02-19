import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { ChooseByTagFPage } from './choose-by-tag-f.page';

describe('ChooseByTagFPage', () => {
  let component: ChooseByTagFPage;
  let fixture: ComponentFixture<ChooseByTagFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseByTagFPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseByTagFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
