
import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines: Airline[] = [];
  airlineName: string = '';
  

  constructor(private airlineService: AirlineService, 
              private router: Router) { 
                this.airlines=[];
              }

  //When we click search button it will come here and do the respective functions  
 searchByName() {
    this.airlineService.findByName(this.airlineName).subscribe(
      (        data: Airline[]) => {
           this.airlines = data;
             console.log(data);
                },
      (       error: any) => {
          console.log(error);
                  }
                );
          }
    //Using this function it will make the details get remove from the DB when we click remove all button                   
  removeAllAirs() {
      if (confirm("Are you sure you want to delete all the airline details? This action can delete all the records from database,cannot retrive back.")) {
        this.airlineService.deleteAll().subscribe(
          (data: Airline[]) => {
              this.airlines = data;
                console.log(data);
           },
     (error: any) => {
         console.log(error);
             }
          );
       }
   }
   
   //Using this function it will show us the international airlines
   fetchByInternationalAirline() {
    this.airlineService.findByInternationalAirline().subscribe(
      data => {
        this.airlines = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Using this function it will show us the Domestic airlines
  fetchByDomesticAirline() {
    this.airlineService.findByDomesticAirline().subscribe(
      data => {
        this.airlines = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAirlines();
  }

  //It will display all the sirline list in the DB
  private getAirlines(){
    this.airlineService.getAirlinesList().subscribe(data => {
      this.airlines = data;
    });
  }

  //To display the details by id when we click view button
  airlineDetails(id: number){
    this.router.navigate(['airline-details', id]);
  }

   //To update the airline details while clicking edit button
  updateAirline(id: number){
    this.router.navigate(['update-airline', id]);
  }

  deleteAirline(id: number){
    this.airlineService.deleteAirline(id).subscribe( data => {
      console.log(data);
      this.getAirlines();
    })
  }

 //This function is for deleting an individual record
  confirmDelete(airline: Airline){
    var status=confirm("You want to delete this record?");
    if(status==true){
        this.deleteAirline(airline.id);
    }
    else{
        this.getAirlines();
    }
}
 
 //For booking the tickets it will perform this functions
bookTicket(id: number){
  console.log(id);
  this.router.navigate(['/bookticket',id]);
 }
 
}
