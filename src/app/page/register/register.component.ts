import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobsService } from '../../services/job.service';
import { Colonist } from '../../models/colonist';
import { ColonistService } from '../../services/colonist.service';
import {FormGroup,
    FormControl,
    FormBuilder,
    Validators,
    ValidatorFn,
    AbstractControl
}   from '@angular/forms';


@Component({
  selector: 'app-jobs',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistService]
})
export class RegisterComponent implements OnInit {


jobs: Job[] = [];
colonist: Colonist;

  constructor(private jobService: JobsService,
              private colonistService: ColonistService) {}

  ngOnInit() {
   this.jobService.getData()
    .subscribe((data) => {
      this.jobs = data.jobs;
      console.log(data);
   });
  }

   postColonist() {
     const colonist = new Colonist('jennifer','20', 'teacher');
     this.colonistService.postData(colonist)
                        .subscribe((newColonist) => {
                          console.log(newColonist);
                        });
   }
}