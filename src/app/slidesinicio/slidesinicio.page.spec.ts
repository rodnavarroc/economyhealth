import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesinicioPage } from './slidesinicio.page';

describe('SlidesinicioPage', () => {
  let component: SlidesinicioPage;
  let fixture: ComponentFixture<SlidesinicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesinicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
