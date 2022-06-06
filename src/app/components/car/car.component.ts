import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Regex} from "../../constans";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: ICar[];
  carForUpdate: ICar | null;
  formCar: FormGroup;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.formCar.value).subscribe(value => {
        this.cars.push(value)
        this.formCar.reset()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.formCar.value).subscribe(value => {
        const updateCar = this.cars.find(value => value.id === this.carForUpdate?.id);
        Object.assign(updateCar, value);
        this.carForUpdate = null;
      })
    }
  }

  delete(id: number): void {
    this.carService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.slice(index, 1);
    })
  }

  _createForm(): void {
    this.formCar = new FormGroup({
      model: new FormControl(null, [Validators.pattern(Regex.model)]),
      year: new FormControl(1990, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0, [Validators.min(0), Validators.max(1000000)])
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car
    this.formCar.setValue({model: car.model, year: car.year, price: car.price})
  }

}
