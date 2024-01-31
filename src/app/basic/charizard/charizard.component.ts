import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss'],
})
export class CharizardComponent implements OnInit {
  public charizard?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe({
      next: (pokemon) => {
        this.charizard = pokemon;
      },
    });
  }
}
