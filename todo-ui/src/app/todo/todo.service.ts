import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {
  private _items: Observable<string[]>;

  constructor(private http: HttpClient) {
    this._items = http.get<any[]>('http://localhost:8083/todos')
      .pipe(map(r => {
        return r[0].items;
      }));
  }

  get items(): Observable<string[]> {
    return this._items;
  }
}
