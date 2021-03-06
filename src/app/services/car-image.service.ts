import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/car-image';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl+"carImages/getimagesbycarid?CarId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  addImage(carImage:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"carimages/add",carImage)
  }
}
