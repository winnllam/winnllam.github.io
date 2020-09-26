import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  getImageLinks(): Observable<any> {
    const endpoint = `https://dribbble-tn.herokuapp.com/get_img_urls/?name=winnllam`;
    return this.http.get(endpoint);
  }
}
