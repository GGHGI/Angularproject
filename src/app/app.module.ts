import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";
import { RouterModule } from "@angular/router";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, PageNoFoundComponent, UserComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    PokemonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
