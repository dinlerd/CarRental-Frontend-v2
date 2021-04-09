import { ChangeDetectorRef, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader,FileItem,FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/car-image';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  carImages:CarImage[] = [];
  uploader:FileUploader;
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false
  baseUrl = "https://localhost:44316/api/";
  currentMain:CarImage;
  @Input() carId:number;

  constructor(private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeUploader(this.carId);
  }

  ngOnInit(): void {

  }


  initializeUploader(carId:number){
    this.uploader = new FileUploader({
      url:this.baseUrl + "carimages/add",
      isHTML5:true,
      allowedFileType:['image'],
      autoUpload:false,
      itemAlias:'Image',
      additionalParameter:{
      carId:this.carId
      },
      removeAfterUpload:true,
      maxFileSize:10*1024*1024
    });
    this.uploader.onAfterAddingFile = (file) =>{
      file.withCredentials = false;
    }

    // this.uploader.response.subscribe(response=>{
    //   this.toastrService.success(response.message, "Photo added successfully")
    // },responseError=>{
    //   this.toastrService.error(responseError.error, "Photo cannot be added")
    // });

    this.uploader.onSuccessItem = (item:FileItem, response:string, status: number, headers: any) => {
      this.toastrService.success("Photo Added","Successful");
    };

    this.uploader.onErrorItem = (item:FileItem, response:string, status: number, headers: any) => {
      this.toastrService.error("Please check car form", "Not Successful");
    };
  }
}
