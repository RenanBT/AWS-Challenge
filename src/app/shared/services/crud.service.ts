import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'',{
      duration:3000,
      verticalPosition:'bottom',
      horizontalPosition: 'center'
    })
  }

  get(path: string) {
    return this.http.get(path);
  }

  post(path: string, data: any) {
    return this.http.post(path, data);
  }

  delete(path: string, id: any) {
    return this.http.delete(path+id);
  }
}
