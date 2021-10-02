import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo w/ Angular!';
  showAddTask: boolean = false;
  subscrtiption!: Subscription;

  constructor(private uiService:UiService) { 
    this.subscrtiption = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
