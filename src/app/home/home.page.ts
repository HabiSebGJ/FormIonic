import { Component } from '@angular/core';
import { tasklist } from 'src/app/home/Task.list';
import { AlertController } from '@ionic/angular';

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
list: tasklist[] = [];
constructor(private alertController: AlertController) {}

onCheckboxChange(event: any) {
  const isChecked = event.detail.checked;
  console.log('Checkbox state changed. Is checked:', isChecked);
  this.presentAlert();
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Good job',
    message: 'Your tasks was finished',
    buttons: [
      {
        text: 'Done',
        handler: () => {
          console.log('Okay clicked');
        },
      },
    ],
  });

  await alert.present();
}

addlist(){
if(this.Title.length >=3 && this.Description.length >=10){
  const newlist: tasklist={
    Title: this.Title,
    Description: this.Description,
    Submit: false,
  }
this.list.push(newlist)
this.Reset();
console.log('', this.list);
}
}
Reset(){
  this.Title='';
  this.Description='';
}

ValidRequirement(){
  this.Sub= this.Title.length>=3 && this.Description.length >=10;
}

marASdone(task:tasklist){
const index = this.list.indexOf(task);
if(index !== 1){
this.list[index].Submit = true;
    }
  }
}
