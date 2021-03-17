import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private patientFiltersSubject = new BehaviorSubject(null);
  patientFilters$ = this.patientFiltersSubject.asObservable();

  setPatientFilters(filter: any) {
    const currentFilter = this.patientFiltersSubject.value;
    const newFilter = {
      ...currentFilter,
      age: filter?.age || currentFilter?.age,
      date: filter?.date || currentFilter?.date,
    };
    this.patientFiltersSubject.next(newFilter);
  }
}
