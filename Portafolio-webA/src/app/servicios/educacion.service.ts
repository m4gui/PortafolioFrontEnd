import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  urlEdu:string = "https://backendmg-rnel.onrender.com/educacion/";
  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any> {
    return this.http.get<any>(this.urlEdu + 'lista');
  }
}
