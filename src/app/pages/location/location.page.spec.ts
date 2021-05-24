import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationPage } from './location.page';

describe('LocationPage', () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;
  //run before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  //creates new test called "should create"
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
