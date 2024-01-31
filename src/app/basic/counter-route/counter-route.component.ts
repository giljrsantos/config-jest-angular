import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styles: [
  ]
})
export class CounterRouteComponent {
  public counter: number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const initialValue = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initialValue) ? 10 : initialValue;
  }

  increaseBy(value: number) {
    this.counter += value;
  }
}
