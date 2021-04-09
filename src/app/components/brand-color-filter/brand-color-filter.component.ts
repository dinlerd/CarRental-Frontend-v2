import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-brand-color-filter',
  templateUrl: './brand-color-filter.component.html',
  styleUrls: ['./brand-color-filter.component.css']
})
export class BrandColorFilterComponent implements OnInit {

  title = "Filter"
  brands: Brand[] = [];
  colors: Color[] = [];
  brandId: Number;
  brandFilterText:string
  colorId: Number;
  colorFilterText:string;

  constructor(private brandService:BrandService,
              private colorService:ColorService,
              private router:Router) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getSelectedBrand(brandId: Number) {
    if (this.brandId == brandId) {
      return true;
    }
    else {
      return false;
    }
  }

  getSelectedColor(colorId: Number) {
    if (this.colorId == colorId) {
      return true;
    }
    else {
      return false;
    }
  }

  applyFilter() {
    if(this.brandId != null && this.colorId != null) {
      this.router.navigate(['/cars/filter/' + this.brandId + "/" + this.colorId])
    }
    else if(this.colorId != null) {
      this.router.navigate(['/cars/filterColor/' + this.colorId])
    }
    else if(this.brandId != null) {
      this.router.navigate(['/cars/filterBrand/' + this.brandId])
    }
  }

  clearFilter() {
    this.router.navigate(['/cars'])
  }

}
