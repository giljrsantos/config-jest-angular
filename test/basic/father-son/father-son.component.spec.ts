import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent]
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });


  it('deveria criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve corresponder ao snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('não deve aparecer botões se não tiver cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });
  it('deve aparecer 2 botões se tiver cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);

  });
  it('deve aparecer 2 botões se tiver cliente no snapshot', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();

  });

  it('deve emitir onDeleteClient com o botão delete', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]')
    btnDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled();

  });
  it('deve emitir onClientUpdated com o botão "Mudar ID"', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]')
    btnChangeId?.dispatchEvent(new Event('click'));
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Juan'
    });

  });

  it('deve lançar onChangeClient com o ID especificado SE houver um cliente', () => {

    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();
    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Juan'
    })


  });

});
