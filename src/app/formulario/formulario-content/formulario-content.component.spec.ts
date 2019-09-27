import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContentComponent } from './formulario-content.component';

describe('FormularioContentComponent', () => {
  let component: FormularioContentComponent;
  let fixture: ComponentFixture<FormularioContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
