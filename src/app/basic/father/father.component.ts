import { Client } from '../interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
})
export class FatherComponent {
  public client?: Client;

  onSetClient(name: string) {
    this.client = { id: 1, name };
  }
}
