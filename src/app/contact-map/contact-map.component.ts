import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, switchAll, switchMap } from 'rxjs/operators';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {

  constructor(private Service:CommonserviceService) { }

  getData(value:any){ 
    return of(value+" Video Uploaded").pipe(delay(5000));
  }

  ngOnInit(): void {
    let data = ['Angular','JQuery','Javascript'];

    // from(data).pipe(
    //   map(res=>this.getData(res)),
    //   concatAll()
    // ).subscribe(res=>{ 
    //     //  console.log(res); 

    //     this.Service.printValue(res,'concatId') 
    // })

    from(data).pipe( 
      concatMap(res=>this.getData(res)) 
    ).subscribe(res=>{ 
        //  console.log(res); 

        this.Service.printValue(res,'concatId') 
    })
  }   

}
