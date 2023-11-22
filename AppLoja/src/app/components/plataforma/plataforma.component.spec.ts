import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaComponent } from './plataforma.component';

describe('PlataformaComponent', () => {
  let component: PlataformaComponent;
  let fixture: ComponentFixture<PlataformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformaComponent]
    });
    fixture = TestBed.createComponent(PlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
