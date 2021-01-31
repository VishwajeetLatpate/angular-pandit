import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { VidhiParams } from '../vidhi-params';

@Component({
  selector: 'app-panditsuccess',
  templateUrl: './panditsuccess.component.html',
  styleUrls: ['./panditsuccess.component.css']
})
export class PanditsuccessComponent implements OnInit {
  vidhiParams=new VidhiParams;
  public vidhiName: string = "";
  public dakshina: string="";
msg ='';
  public vidhiOptions = [
    { id: 0, name: "Satyanarayan" },
    { id: 1, name: "Vastu Puja" },
    { id: 2, name: "Durga Puja" },
    { id: 3, name: "Vivah Puja" },
    { id: 4, name: "Laxmi Puja" },
    { id: 5, name: "Ghat Puja" },
    { id: 6, name: "Shradh" },
  ];
  panditId: any;
data :any;
  constructor(private api: RegistrationService,private route: ActivatedRoute) { 
    this.panditId = route.snapshot.queryParamMap.get("panditId");
    console.log("PanditId:"+ this.panditId);
  }

  ngOnInit(): void {
  }

  addVidhiByDakshina(){
    
    this.vidhiParams.panditId=this.panditId;
    this.vidhiParams.vidhiName=this.vidhiName;
    this.vidhiParams.dakshina=this.dakshina;

    this.api.postVidhiByPandit(this.vidhiParams).subscribe(
      (data)=>{
            console.log("responce received");
            if(data){
              this.msg="Data saved";
            }
            else{
              this.msg="error";
            }

      })

  }
}
