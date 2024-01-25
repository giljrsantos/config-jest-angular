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

  it('deveria criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve corresponder ao snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('increaseBy(): deve aumentar com base no argumento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  it('ao clicar no botão(+1) deve aumentar em 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);

  })

  it('ao clicar no botão(-1) deve diminuir em 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  it('alterar o contador deve atualizar a tag h1', () => {
    component.increaseBy(10);
    fixture.detectChanges()
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20')
  })
});
