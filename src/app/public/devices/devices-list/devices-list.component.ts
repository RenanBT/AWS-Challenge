import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private crudService: CrudService) {
  }

  devices: any[];

  displayedColumns: string[] = ['id', 'category_name','color','part_number', 'delete'];

  ngOnInit(): void {
    this.loadData();
  }

  newDevice() {
    this.router.navigate(['item'], {relativeTo: this.route});
  }

  loadData() {
    this.crudService.get('devices').subscribe((devices: any) => {
      console.log(devices);
      this.devices=devices;
    });
  }
  delete(id: any) {
    if(confirm("Are you sure you want to delete this Device?"))
    this.crudService.delete('devices/', id).subscribe(() => {
      this.loadData();
    });
  }

}
