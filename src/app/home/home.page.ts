import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public Title: string= '';
public Description: string= '';
public Sub: boolean= false;
public Done: boolean= false;
public submis: Array<{Title:string, Description: string}> =[];

constructor() {}
ValidRequirement(){
  this.Sub= this.Title.length>=3 && this.Description.length >=10;
  this.Done= this.Sub;
}

}
