import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private patientFiltersSubject = new BehaviorSubject(null);
  patientFilters$ = this.patientFiltersSubject.asObservable();

  setPatientFilters(filter: any) {
    this.patientFiltersSubject.next(filter);
  }
}
