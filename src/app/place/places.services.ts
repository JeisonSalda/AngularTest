import { Injectable } from "@angular/core";

@Injectable()
export  class PlacesService{
    places:any = [
        {id: 1, name: 'Platzi HQ'},
        {id: 2, name: 'Ceiba Software'}
    ];

    getPlaces(){
        return this.places;
    }

}