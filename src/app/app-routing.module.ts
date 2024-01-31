import { RouterModule, Routes } from '@angular/router';

import { CharizardComponent } from './basic/charizard/charizard.component';
import { CounterComponent } from './basic/counter/counter.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';
import { FatherComponent } from './basic/father/father.component';
import { FatherSonComponent } from './basic/father-son/father-son.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/counter/:initial',
    component: CounterRouteComponent
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent
  },
  {
    path: 'basic/father',
    component: FatherComponent
  },
  {
    path: 'basic/father-son',
    component: FatherSonComponent
  },
  {
    path: '**',
    redirectTo: 'basic/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
