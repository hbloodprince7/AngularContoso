import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContosoBookingComponent } from './contoso-booking/contoso-booking.component';
import { ContosoDetailsComponent } from './contoso-details/contoso-details.component';

const routes: Routes = [
  
  
  {path:'EventsDetails',component:ContosoBookingComponent},
  {path:'BookingDetails',component:ContosoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
