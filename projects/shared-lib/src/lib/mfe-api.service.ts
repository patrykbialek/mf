import { Injectable } from '@angular/core';
import { StoreService } from '@shared-lib';

@Injectable({
  providedIn: 'root'
})
export class MfeApiService {

  patientFilters$ = this.storeService.patientFilters$;

  constructor(
    private storeService: StoreService,
  ) { }

  setPatientFilters(filter: any) {
    this.storeService.setPatientFilters(filter);
  }
}
