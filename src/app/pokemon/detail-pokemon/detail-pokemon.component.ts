import { PokemonService } from "src/app/pokemon.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null =
      this.activatedRoute.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)?.subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
    }
  }
  goToPokemonList(): void {
    this.router.navigate(["/pokemons"]);
  }
}
