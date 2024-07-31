import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibModel } from './lib.model';
//Deletebook/:bookName /registerBook /Allbooks /Onebook/:bookName /Updatebook/:bookName
@Injectable({
  providedIn: 'root',
})
export class LibService {
  constructor(private http: HttpClient) {}

  baseurl: string = 'https://mean3.onrender.com/';

  getAllLibs() {
    return this.http.get<LibModel[]>(this.baseurl + 'Allbooks');
  }

  getLibById(id: string) {
    return this.http.get<LibModel>(this.baseurl + 'Onebook' + '/' + id);
  }

  addLib(Lib: LibModel) {
    return this.http.post(this.baseurl + 'registerBook', Lib);
  }

  deleteLib(id: string) {
    return this.http.delete(this.baseurl + 'Deletebook' + '/' + id);
  }

  updateLib(id: string, bookData: LibModel) {
    return this.http.put(this.baseurl + 'Updatebook' + '/' + id, bookData);
  }
}
