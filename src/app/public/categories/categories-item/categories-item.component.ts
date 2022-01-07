import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  public form: FormGroup;


  constructor(private crudService: CrudService, private router: Router) {
  }

  ngOnInit(): void {
    this.creatForm();
  }


  creatForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
    });
    
  }
  

  submit() {
    if (!this.form.invalid) {
      this.crudService.post('categories', this.form.getRawValue()).subscribe((data: any) => {
        console.log(data);
        this.form.reset();
      });
      this.crudService.showMessage('Category Created!');
      this.router.navigate(['/categories'])
    }

  }
}
