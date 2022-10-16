import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosCRUDComponent } from './jogos-crud.component';

describe('JogosCRUDComponent', () => {
  let component: JogosCRUDComponent;
  let fixture: ComponentFixture<JogosCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
