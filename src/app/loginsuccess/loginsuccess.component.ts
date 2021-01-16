/* import { Component, OnInit } from '@angular/core';
import { Pandit } from '../pandit';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
pandit =new Pandit();
 msg='';
 public data = [];
 public noData: any;
 public results = [];
  map: any;
  constructor( private api: RegistrationService ) { }

  getAll() {
    this.api.getPanditFromRemote().subscribe((results) =>  {
      this.data = results;
      console.log(this.data);
      console.log('JSON Response = ', JSON.stringify(results));
    })
  }

  ngOnInit() {
  }
 
  
}
*/
import { Component, OnInit } from '@angular/core';
import { Pandit } from '../pandit';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  private pandit: Pandit = new Pandit();
  public vidhiName: string = "";
  public data = [];
  public noData: any;
  public results = [];
  public vidhiOptions = [
    { id: 0, name: "Satyanarayan" },
    { id: 1, name: "Vastu Puja" },
    { id: 2, name: "Durga Puja" },
    { id: 3, name: "Vivah Puja" },
    { id: 4, name: "Laxmi Puja" },
    { id: 5, name: "Ghat Puja" },
    { id: 6, name: "Shradh" },
  ];

  map: any;
  constructor(private api: RegistrationService) { }

  getAll() {
    // VidhiName will be updated in model when selection is changed 
    // and available as this.vidhiName 
    this.api.getPanditFromRemote(this.vidhiName).subscribe((results) => {
      this.data = results;
      console.log(this.data);
      console.log('JSON Response = ', JSON.stringify(results));
    })
  }

  ngOnInit() {
  }


}

