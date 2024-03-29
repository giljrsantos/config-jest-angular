import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { CounterRouteComponent } from '../../../src/app/basic/counter-route/counter-route.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  it('increaseBy(): deve aumentar com base no argumento', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CounterRouteComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.increaseBy(5);
    expect(component.counter).toBe(5);
  });

  it('deve ter o valor inicial em zero', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CounterRouteComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  });

  it('deve ter o valor inicial de 100 na rota /counter/100', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '100' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CounterRouteComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });

  it('deve ter o valor inicial de 10 na rota /counter/20abc', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial'
              ? '20abc'
              : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CounterRouteComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});
