import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ListPokemonComponent } from "./list-pokemon.component";
import { BarrederechercheComponent } from "../barrederecherche/barrederecherche.component";

describe("ListPokemonComponent", () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListPokemonComponent,
        BarrederechercheComponent,
        // Ajoutez le composant app-barrederecherche dans les déclarations
      ],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
