import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { AlienService } from '../../services/alien.service';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService]
})
export class ReportComponent implements OnInit {

aliens: Alien[] = [];
report: Report;
reportForm: FormGroup;

  constructor(private alienService: AlienService, private reportService: ReportService) {

  }

  ngOnInit() {
     this.reportForm = new FormGroup({
      atype: new FormControl('', []),
      action: new FormControl('', [])
    });

    this.alienService.getData()
    .subscribe((data) => {
      this.aliens = data.aliens;
      console.log(data);
    });
  }

   postReport() {
     const report = new Report('1', 'coffee', 'noddle', '7');
     this.reportService.postData(report)
                        .subscribe((Report) => {
                          console.log(new Report);
                        });
   }
emptyobject
}


