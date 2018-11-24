import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectItem, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'app';
  //  domLayout = 'autoHeight';

  columns = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  datasource: any = [];
  newCar: boolean;
  displayDialog: boolean;
  car: any = {};
  cars: any = [];
  selectedCar;

  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;
  totalRecords: number;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    // this.cars = this.http.get('https://api.myjson.com/bins/15psn9');
    
    this.cars = [
      { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
      { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
      { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
      { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
      { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
      { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
      { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
      { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
      { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
      { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' }
    ];

    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.datasource = this.cars;
    this.totalRecords = this.datasource.length;
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;

    // in a real application, make a remote request to load data using state metadata from event
    // event.first = First row offset
    // event.rows = Number of rows per page
    // event.sortField = Field name to sort with
    // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    // filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    // imitate db connection over a network
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    console.log(event);
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}

