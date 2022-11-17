import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioListaJogosComponent } from './inicio-lista-jogos.component';

describe('InicioListaJogosComponent', () => {
  let component: InicioListaJogosComponent;
  let fixture: ComponentFixture<InicioListaJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioListaJogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioListaJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
