import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import {CarComponent} from "../../components";
import {ReactiveFormsModule} from "@angular/forms";
import {CarService} from "../../services";


@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CarService
  ]
})
export class CarModule { }
