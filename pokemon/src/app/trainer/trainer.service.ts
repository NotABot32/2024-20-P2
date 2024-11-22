import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl: string = environment.baseUrl + '/trainers.json';
  


constructor(private http: HttpClient) { }

getTrainers(): Observable<Trainer[]>{
  return this.http.get<Trainer[]>(this.apiUrl);
}

getTrainer(id: number): Observable<Trainer>{
  return this.http.get<Trainer>(this.apiUrl+"/" + id + "trainers.json");

}


}
