import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-packages',
  templateUrl: './page-packages.component.html',
  styleUrls: ['./page-packages.component.scss']
})
export class PagePackagesComponent implements OnInit {

  search: FormControl;

  constructor() {
    this.search = new FormControl('');
  }

  ngOnInit(): void {
  }

}
