import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialGastosPage } from './historial-gastos.page';

describe('HistorialGastosPage', () => {
  let component: HistorialGastosPage;
  let fixture: ComponentFixture<HistorialGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialGastosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
