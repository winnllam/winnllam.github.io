import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  getImageLinks(): Observable<any> {
    const endpoint = `https://socialmedia-image-scapel.vercel.app/dribbble?name=winnllam`;
    return this.http.get(endpoint);
  }
}
