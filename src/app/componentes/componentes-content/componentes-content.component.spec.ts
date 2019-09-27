import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesContentComponent } from './componentes-content.component';

describe('ComponentesContentComponent', () => {
  let component: ComponentesContentComponent;
  let fixture: ComponentFixture<ComponentesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
