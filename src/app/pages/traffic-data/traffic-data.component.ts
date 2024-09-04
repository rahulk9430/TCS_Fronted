import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map, timer} from 'rxjs';
import { RoadService } from 'src/app/services/road.service';
import { TrafficData } from 'src/app/traffic-data';


@Component({
  selector: 'app-traffic-data',
  templateUrl: './traffic-data.component.html',
  styleUrls: ['./traffic-data.component.css']
})
export class TrafficDataComponent implements OnInit {

  trafficData!: TrafficData[];
  timerSubscription!: Subscription;
  displayedColumns: string[] = ['roadName','detectorName','occupancyPercentage','averageSpeed',
   'classOneVolume','classTwoVolume','classThreeVolume','volume','date','period','congestionLevel'];
  dataSource = this.trafficData;

  constructor(private roadService:RoadService,private router:Router){}

  ngOnInit(): void {
        this. getRoads();

        this.timerSubscription = timer(0, 20000).pipe(
          map(() => {
            this.getRoads();
          })
        ).subscribe();

  }
 private getRoads(){

    this.roadService.trafficDataList().subscribe(
      (data:any)=>{
        this.dataSource=data;
     //   console.log(data)
      }
    )
  }

}
