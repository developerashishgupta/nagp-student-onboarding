import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentCategory } from '../../enums/student-category-enum';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentsUrl = 'api/';  // URL to web api
  constructor(private http: HttpClient) { }

  getDocuments (category:StudentCategory): Observable<any> {
    return this.http.get<any>(this.documentsUrl + category);
  }
}
