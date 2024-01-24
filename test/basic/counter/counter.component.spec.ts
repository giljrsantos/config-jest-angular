import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('increaseBy(): debe de incrementar  basado en el argumento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  it('hacer click en los botone debe incrementar en 1', () => {

    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);

  })
  it('hacer click en los botone debe decrementar en 1', () => {

    const buttons = compiled.querySelectorAll('button');

    buttons[1].click();
    expect(component.counter).toBe(9);

  });

  it('cambiar el counter debe de actualizar la etiqueta h1', () => {
    component.increaseBy(10);
    fixture.detectChanges()
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20')
  })
});
