import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { LoaderComponent } from "./../loader/loader.component"; // Importez LoaderComponent

class MockActivatedRoute {
  snapshot = {
    paramMap: convertToParamMap({ id: 1 }),
  };
}

describe("DetailPokemonComponent", () => {
  let component: DetailPokemonComponent;
  let fixture: ComponentFixture<DetailPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPokemonComponent, LoaderComponent], // Ajoutez LoaderComponent dans les déclarations
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(DetailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
