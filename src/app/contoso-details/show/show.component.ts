import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  BookingsList:any=[];

  constructor(private service:CommonService) { }
 

  ModalTitle!:string;
  ActivateEventsComp:Boolean=false;
  bookings:any

  ngOnInit(): void {
    this.refreshbookinglist();
  }

  refreshbookinglist(){
    this.service.getbookinglist().subscribe(data=>{
      this.BookingsList=data;
    })
  }

}
