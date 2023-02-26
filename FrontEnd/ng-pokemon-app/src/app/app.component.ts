import { Component,OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 
  
})
export class AppComponent implements OnInit {
  PokemonsList:Pokemon[] =  POKEMONS;
  PokemonSelected:Pokemon|undefined;

 
   
  ngOnInit(){

 
    console.table(this.PokemonsList);
    console.log(this.PokemonsList);

   }
  select(pokemonId:string)
  {
 const  pokemon : Pokemon|undefined = this.PokemonsList.find(pokemon=>pokemon.id==+pokemonId);
 if (pokemon){
   console.log(`vous avez cliquer sur le pokemon ${pokemon.name}`);
   this.PokemonSelected=pokemon;
 }
else {
   console.log(`vous avez cliquer sur le pokemon n'existe pas`);
   this.PokemonSelected=pokemon;
 }
  }
}
