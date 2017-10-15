import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
	
 	start_date;
 	end_date;
  public startDate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams,private calendar: Calendar,  private datePicker:DatePicker) {
  	 this.startDate = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  showDateTimePicker(event){
   
  	this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
        date => { event.target.value = date; alert(date); },
        err => console.log('Error occurred while getting date: ' + err)
    );

  }

  public openCalendar():void{
       alert("ASdsad");
     this.calendar.createCalendar('MyCalendar').then(
        (msg) => { alert(msg); },
        (err) => { console.log(err); }
      );

    this.calendar.openCalendar(this.startDate);
  }

   public showDateTime():void{
    alert("open date time picker");
    this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
        date => { alert(date); },
        err => console.log('Error occurred while getting date: ' + err)
    );
  }





 

}
