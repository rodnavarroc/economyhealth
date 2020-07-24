import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialIngresosPage } from './historial-ingresos.page';

describe('HistorialIngresosPage', () => {
  let component: HistorialIngresosPage;
  let fixture: ComponentFixture<HistorialIngresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialIngresosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
