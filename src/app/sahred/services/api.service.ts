import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http:HttpClient) { }

  getData(url):Observable<any>{
   return this._http.get(url)
  }

  createData(url,data):Observable<any>{
    return this._http.post(url,data)
  }

  deleteData(url,data):Observable<any>{
    return this._http.delete(url,data)
  }

  editData(url,data):Observable<any>{
    return this._http.put(url,data)
  }

}
