import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-devices-item',
  templateUrl: './devices-item.component.html',
  styleUrls: ['./devices-item.component.css']
})
export class DevicesItemComponent implements OnInit {

  public form: FormGroup;
  categories: any[] = [];

  constructor(private crudService: CrudService, private router: Router) {
  }

  

  ngOnInit(): void {
    this.creatForm();
    this.loadData();
  }


  creatForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      category_id: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      part_number: new FormControl(null, [Validators.required,Validators.min(0)]),
    });
  }

  loadData() {
    this.crudService.get('categories').subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  

  submit() {
    if (!this.form.invalid) {
      this.crudService.post('devices', this.form.getRawValue()).subscribe((data: any) => {
        console.log(data);
        this.form.reset();
      });
      this.crudService.showMessage('Device Created!');
      this.router.navigate(['/devices'])
    }

  }
}
