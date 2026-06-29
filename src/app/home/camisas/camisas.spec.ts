import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camisas } from './camisas';

describe('Camisas', () => {
  let component: Camisas;
  let fixture: ComponentFixture<Camisas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camisas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Camisas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
