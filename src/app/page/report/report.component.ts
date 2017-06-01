import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { AlienService } from '../../services/alien.service';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService]
})
export class ReportComponent implements OnInit {

aliens: Alien[] = [];
report: Report[] = [];

  constructor(private alienService: AlienService, private reportService: ReportService) {

  }

  ngOnInit() {
    this.alienService.getData()
    .subscribe((data) => {
      this.aliens = data.aliens;
      console.log(data);
    });
  }

   postReport() {
     const report = new Report('1', 'coffee', 'noddle', 'orange');
     this.reportService.postData(report)
                        .subscribe((Report) => {
                          console.log(new Report);
                        });
   }

}


