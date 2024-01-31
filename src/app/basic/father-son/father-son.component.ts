import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Client } from '../interface';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.scss'],
})
export class FatherSonComponent {
  @Input() client?: Client;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<Client>();

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange(id: number) {
    if (!this.client) return;
    //this.client.id = newId; não usar
    this.client = {
      ...this.client,
      id,
    };
    this.onClientUpdated.emit({ ...this.client });
  }
}
