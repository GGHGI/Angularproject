import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

// Importez LoaderComponent

class MockActivatedRoute {
  snapshot = {
    paramMap: convertToParamMap({ id: 1 }),
  };
}

describe("app.component", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // Ajoutez LoaderComponent dans les déclarations
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
      imports: [HttpClientModule, RouterModule], // Ajoutez RouterModule ici
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
