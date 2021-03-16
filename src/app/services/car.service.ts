import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44316/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailsByBrandId(carBrandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandid=" + carBrandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByColorId(carColorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorid=" + carColorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbyid?carid=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}