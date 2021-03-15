import { Injectable } from "@angular/core";
import { StoreService } from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class MfeApiService {

  patientFilters$ = this.storeService.patientFilters$;

  constructor(
    private storeService: StoreService,
  ) { }


}
