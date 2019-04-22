import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    
     const Domestic= [
          {
              value: 0,
              name: 'Domicile Certificate',
              isMandatory: true
          },
          {
              value: 1,
              name: 'Birth Certificate',
              isMandatory: true
          },
          {
              value: 2,
              name: 'Previous Marksheets',
              isMandatory: true
          },
          {
              value: 3,
              name: 'Police Clearance',
              isMandatory: false
          },
          {
              value: 4,
              name: 'Passport',
              isMandatory: false
          },
          {
              value: 5,
              name: 'Signed Declaration',
              isMandatory: true
          }
      ]
      const International= [
          {
              value: 0,
              name: 'Domicile Certificate',
              isMandatory: true
          },
          {
              value: 2,
              name: 'Birth Certificate',
              isMandatory: true
          },
          {
              value: 2,
              name: 'Previous Marksheets',
              isMandatory: true
          },
          {
              value: 3,
              name: 'Police Clearance',
              isMandatory: true
          },
          {
              value: 4,
              name: 'Passport',
              isMandatory: true
          },
          {
              value: 5,
              name: 'Signed Declaration',
              isMandatory: true
          }
      ]
    return {Domestic,International };
}
}


