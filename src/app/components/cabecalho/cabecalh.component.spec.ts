import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhComponent } from './cabecalh.component';

describe('CabecalhComponent', () => {
  let component: CabecalhComponent;
  let fixture: ComponentFixture<CabecalhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
