import { HttpClient } from "@angular/common/http";
import { Pokemon } from "./pokemon/pokemon";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`https://pokebuildapi.fr/api/v1/pokemon`)
      .pipe(
        tap((pokemonList) => console.table(pokemonList)),
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http
      .get<Pokemon>(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
      .pipe(
        tap((pokemon) => console.table(pokemon)),
        catchError((error) => {
          console.log(error);
          return of(undefined);
        })
      );
  }

  searchPokemon(searchTerm: string): Observable<Pokemon[]> {
    if (searchTerm.length <= 3) {
      return of([]);
    }
    return this.http
      .get<Pokemon[]>(
        `https://pokebuildapi.fr/api/v1/pokemon?name=${searchTerm}`
      )
      .pipe(
        tap((results) => console.table(results)),
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
