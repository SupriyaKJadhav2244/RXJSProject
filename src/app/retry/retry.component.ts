import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  repos: any; 
  errorMessage: any;

  constructor(private Service:CommonserviceService) { }

  ngOnInit(): void {
    this.Service.getAllData().subscribe(res=>{ 
      this.repos = res;
      console.log( this.repos); 
    },
    (err) => {                              //Error callback
      console.error(err)
      this.errorMessage = err+' (error caught due to network problem)';
    });
  }

}
