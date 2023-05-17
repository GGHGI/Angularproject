import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from "../loader/loader.component";
import { BarrederechercheComponent } from "./barrederecherche.component";

class MockActivatedRoute {
  snapshot = {
    paramMap: convertToParamMap({ id: 1 }),
  };
}

describe("BarrederechercheComponent", () => {
  let component: BarrederechercheComponent;
  let fixture: ComponentFixture<BarrederechercheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrederechercheComponent, LoaderComponent],
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(BarrederechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
