import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { AlienService } from '../../services/alien.service';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';

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
currentdate: Date;

  constructor(private alienService: AlienService, private reportService: ReportService, private router: Router) {
  }

  ngOnInit() {
     this.reportForm = new FormGroup({
      alien_id: new FormControl('', []),
      description: new FormControl('', [])
    });

    this.alienService.getData()
    .subscribe((data) => {
      this.aliens = data.aliens;
      console.log(data);
    });
      this.currentdate = new Date();
      console.log(this.currentdate);
      this.currentdate.getMonth();
    }

  reported(e) {
    e.preventDefault();
    if (this.reportForm.invalid) {
      // the form is invalid
    } else {
      const colonist_id = localStorage.colonist_id;
      const submitdate = `${this.currentdate.getFullYear()}-${this.currentdate.getMonth()+ 1}-${this.currentdate.getDate()}`;
      const atype = this.reportForm.get('alien_id').value;
      const action = this.reportForm.get('description').value;

      const report = new Report(atype, submitdate, action, colonist_id);
      this.reportService.postData(report)
                        .subscribe((newReport) => {
                        this.router.navigate(['encounters']);
                        });
    }
  }
}


