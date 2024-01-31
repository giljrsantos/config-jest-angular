import { CharizardComponent } from '@app/basic/charizard/charizard.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '@app/basic/counter/counter.component';
import { NgModule } from '@angular/core';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';
import { CounterRouteComponent } from './counter-route/counter-route.component';

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent,
    CounterRouteComponent,
  ],
  imports: [CommonModule],
})
export class BasicModule {}
