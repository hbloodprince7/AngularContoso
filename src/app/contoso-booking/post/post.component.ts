import { Component, OnInit , Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  EventsList:any=[];

  constructor(private service:CommonService) { }
  @Input() events:any;

  bookingId!:number;
  bookingEventId!:number;
  bookingEvent!:string;  
  bookingUserId!:number;
  bookingTicketCatagory!:string;
  bookingNumberofTickets!:number;
  
 

  ngOnInit(): void {
    this.bookingId=this.events.bookingId;
    this.bookingEventId=this.events.bookingEventId;
    this.bookingEvent=this.events.bookingEvent;
    this.bookingUserId=this.events.bookingUserId;
    this.bookingTicketCatagory=this.events.bookingTicketCatagory;
    this.bookingNumberofTickets=this.events.bookingNumberofTickets;
    
  }

  addevent(){
    var val={ bookingId:this.bookingId,
      bookingEventId:this.bookingEventId,
      bookingEvent:this.bookingEvent,
      bookingUserId:this.bookingUserId,
      bookingTicketCatagory:this.bookingTicketCatagory,
      bookingNumberofTickets:this.bookingNumberofTickets}

      this.service.addevent(val).subscribe((res: { toString: () => any; })=>{
        alert(res.toString());

        
        
        });
  }

  refresheventlist(){
    this.service.geteventlist().subscribe(data=>{
      this.EventsList=data;
     

    })
  }

}



