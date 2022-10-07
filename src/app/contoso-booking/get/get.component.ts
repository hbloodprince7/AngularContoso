import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service:CommonService) { }
  EventsList:any=[];

  ModalTitle!:string;
  ActivateEventsComp:Boolean=false;
  events:any

  ngOnInit(): void {
    this.refresheventlist();
  }

  addClick(){
    this.events={
      
      bookingEventId:"",
      bookingEvent:"",
      bookingUserId:"",
      bookingTicketCatagory:"",
      bookingNumberofTickets:""
      

    }

    
    this.ModalTitle="Book Event";
    this.ActivateEventsComp=true;

  }

  closeClick(){
    this.ActivateEventsComp=false;
    this.refresheventlist();
  }
   
  refresheventlist(){
    this.service.geteventlist().subscribe(data=>{
      this.EventsList=data;
     

    })
  }

}



