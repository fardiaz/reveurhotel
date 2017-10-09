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
	
 	private datePicker;
 	private calendar;
 	start_date;
 	end_date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 this.datePicker = DatePicker;
  	 this.calendar = Calendar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  showDateTimePicker(event){

  	this.datePicker.show({
        date: new Date(),
        mode: 'datetime',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
        date => { event.target.value = date; alert(date); },
        err => console.log('Error occurred while getting date: ' + err)
    );

  }

  openCalendar(event){
	    this.calendar.openCalendar(new Date()).then(


	        (msg) => { event.target.value = msg; alert(msg); },
	        (err) => { console.log(err); }
	    );
	}

}
