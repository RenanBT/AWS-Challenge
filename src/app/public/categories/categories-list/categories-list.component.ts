import { CategoriesItemComponent } from './../categories-item/categories-item.component';
import {Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  

  constructor(private router: Router, private route: ActivatedRoute, private crudService: CrudService) {
  }
  categories: any[]; 

  displayedColumns: string[] = ['id', 'name', 'delete'];


  ngOnInit(): void {
    this.loadData();
    
  }

  newDevice() {
    this.router.navigate(['item'], {relativeTo: this.route});
    
  }

  loadData() {
    this.crudService.get('categories').subscribe((categories: any) => {
      console.log(categories);
      this.categories=categories;
    });
  }
    delete(id: any) {
      if(confirm("Are you sure you want to delete this Category?"))
      this.crudService.delete('categories/', id).subscribe(() => {
        this.loadData();
      });
  }

  

}
