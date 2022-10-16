import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetalheComponent } from './jogo-detalhe.component';

describe('JogoDetalheComponent', () => {
  let component: JogoDetalheComponent;
  let fixture: ComponentFixture<JogoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
