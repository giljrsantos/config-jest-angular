import { CharizardComponent } from '@app/basic/charizard/charizard.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '@app/basic/counter/counter.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
