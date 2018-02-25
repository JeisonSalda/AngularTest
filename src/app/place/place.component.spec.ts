import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { PlacesService } from './places.services';

describe('PlaceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    })
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should have the same places as the services', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    let placeServices = fixture.debugElement.injector.get(PlacesService);
    expect(app.places).toEqual(placeServices.places);
  })


});
