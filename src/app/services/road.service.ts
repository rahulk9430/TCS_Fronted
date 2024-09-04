import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoadService {

  baseURL="http://localhost:8081";
  

  constructor(private http:HttpClient) { }

  public trafficDataList(){
    return this.http.get(`${this.baseURL}/traffic/`);
  }

  public addRoad(road:any){
    return this.http.post(`${this.baseURL}/road/`,road);

  }
  listOfRoad(){
   return this.http.get(`${this.baseURL}/road/`);
  }

  deleteRoad(roadId:number){
    return this.http.delete(`${this.baseURL}/road/${roadId}`);

  }
  getRoad(roadId:number){
    return this.http.get(`${this.baseURL}/road/${roadId}`);
  }
  updateRoad(roadId:number,road:any){
    return this.http.put(`${this.baseURL}/road/${roadId}`,road);
  }
}
