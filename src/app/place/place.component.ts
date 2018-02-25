import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlacesService]
})
export class PlaceComponent implements OnInit {

  places = [];

  constructor(private placeServices : PlacesService) {
      this.places = placeServices.getPlaces();
   }

  ngOnInit() {
  }

}
