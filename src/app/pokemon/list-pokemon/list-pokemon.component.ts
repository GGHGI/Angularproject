import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "src/app/pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
    console.log(this.pokemonList);
  }

  goToPokemon(pokemon: Pokemon): void {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
