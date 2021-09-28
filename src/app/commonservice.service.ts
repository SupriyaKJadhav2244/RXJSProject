import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  url: string="";

  constructor(private http:HttpClient) { }

  printValue(data:any,containerId:any){
    let el = document.createElement('li');
    el.innerText = data;

    document.getElementById(containerId)?.append(el);
  }

  getAllData(){
    return this.http.get(this.url).pipe(retry(3),catchError(err=>{  
      // console.error(err);

      return throwError(err.message);
    }
    ));
   }
}
  