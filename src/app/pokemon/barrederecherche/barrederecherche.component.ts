import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { of, Subject, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../../pokemon.service";

@Component({
  selector: "app-barrederecherche",
  templateUrl: "./barrederecherche.component.html",
})
export class BarrederechercheComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.length <= 3) {
          return of([]);
        }
        return this.pokemonService.searchPokemon(term);
      })
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
