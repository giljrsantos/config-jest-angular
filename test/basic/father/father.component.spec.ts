import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });
  it('Deve Criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve corresponder ao snpashot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('deve estabelecer o cliente com o nome indicado', () => {
    component.onSetClient('Pedro');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');

    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('"Pedro"');
  });

  it('deve excluir o cliente se ele for emitido onDeleteClient (Filho)', () => {
    component.client = { id: 1, name: 'Eduardo' }
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });

  it('deve atualizar o cliente onClientUpdated', () => {
    component.client = { id: 10, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponet: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponet.onClientUpdated.emit({ id: 10, name: 'Pedro' });
    expect(component.client).toEqual({ id: 10, name: 'Pedro' });
  });

});
