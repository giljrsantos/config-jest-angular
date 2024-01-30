import { CharizardComponent } from '@app/basic/charizard/charizard.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '@app/basic/counter/counter.component';
import { NgModule } from '@angular/core';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
