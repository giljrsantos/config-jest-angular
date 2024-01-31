import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { TestBed } from '@angular/core/testing';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('deveria criar', () => {
    expect(service).toBeTruthy();
  });

  it('deve trazer informações do bulbasaur', (done) => {
    service.getPokemon(1).subscribe({
      next: (pokemon) => {
        expect(pokemon.name).toBe('bulbasaur');
        done();
      },
    });
  });
});
