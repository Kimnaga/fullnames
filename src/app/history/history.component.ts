import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searches : Observable <any []>
  constructor(private service: DashboardService) {  }

  ngOnInit() {
    this.searches = this.service.getSearchHistory();
  }


}
