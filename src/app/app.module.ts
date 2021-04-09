import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';


import { ToastrModule } from 'ngx-toastr';
import { RentSummaryComponent } from './components/rent-summary/rent-summary.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarImageAddComponent } from './components/car/car-image-add/car-image-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandOperationsComponent } from './components/brand-operations/brand-operations.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorOperationsComponent } from './components/color-operations/color-operations.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarOperationsComponent } from './components/car-operations/car-operations.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserPassUpdateComponent } from './components/user-pass-update/user-pass-update.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { DatePipe } from '@angular/common';
import { BrandColorFilterComponent } from './components/brand-color-filter/brand-color-filter.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { ImageAddComponent } from './components/image-add/image-add.component';
import { TextDirective } from './directives/text.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    FilterPipePipe,
    RentSummaryComponent,
    CarFilterComponent,
    CarAddComponent,
    CarImageAddComponent,
    PaymentComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    BrandOperationsComponent,
    BrandAddComponent,
    ColorOperationsComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    CarOperationsComponent,
    LoginComponent,
    RegisterComponent,
    UserUpdateComponent,
    UserPassUpdateComponent,
    NewPaymentComponent,
    CreditCardListComponent,
    BrandColorFilterComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    ImageAddComponent,
    TextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    FileUploadModule
  ],
  providers: [
    DatePipe,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
