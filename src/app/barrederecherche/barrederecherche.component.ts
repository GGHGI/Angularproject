import { PokemonService } from "src/app/pokemon.service";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Pokemon } from "../pokemon/pokemon";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinct,
  distinctUntilChanged,
  switchMap,
} from "rxjs";

@Component({
  selector: "app-barrederecherche",
  templateUrl: `./barrederecherche.component.html`,
})
export class BarrederechercheComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term) => this.PokemonService.searchPokemon(term))
    );
  }

  Search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["pokemon", pokemon.id];
    this.router.navigate(link);
  }
}

//   onSearch() {
//     this.pokemonService
//       .searchPokemon(this.searchTerm)
//       .subscribe((results: Pokemon[]) => {
//         this.searchResults = results;
//       });
//   }
// }
