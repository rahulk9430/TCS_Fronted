import { Component,OnInit } from '@angular/core';
import { RoadService } from 'src/app/services/road.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-road',
  templateUrl: './create-road.component.html',
  styleUrls: ['./create-road.component.css']
})
export class CreateRoadComponent implements OnInit {
  
  constructor(private service:RoadService,private snack:MatSnackBar,private router:Router){}
  public road={
    roadId:'',
    roadName:'',
    detectorName:'',
    detectorStatus:''
  }

  ngOnInit(): void {

  
  }

  formSubmit(){
    
    
    console.log(this.road)

    if(this.road.roadName==''){
     // alert("Road Name is Required!!");
     this.snack.open("Please Enter Road Name",'',
     { duration:2000})
      return;
    }
    else if(this.road.detectorName==''){
      //alert("Detector Name is Required");
      this.snack.open("Please Enter Detector Name",'',
     { duration:2000})
      return;
    }
    else if(this.road.detectorStatus==''){
      //alert("Detector Status is required!!");
      this.snack.open("Please Select Detector Status",'',
     { duration:2000})
      return;
    }

    this.service.addRoad(this.road).subscribe(
      (data)=>{
        //success
       // alert("Success");
       Swal.fire('Success','Road is successfully register','success');
       this.router.navigate(['/road-list']);

      },
      (error)=>{
        //error
          alert("Something went Wrong");
      });

  }

}
