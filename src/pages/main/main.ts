import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
//import { Calendar } from '@ionic-native/calendar';
import * as dateFormat  from 'dateformat';
import { ReveurService } from '../../app/services/ReveurService';
import { RoomsPage } from '../rooms/rooms';
import { BookPage } from '../book/book';


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
  testString:String;

  motelId: String = "2294";
  dateCheckin: String;
  dateCheckout: String;
  public startDate: Date;
  public items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,  private datePicker:DatePicker,private reveurService:ReveurService) {
  	 this.startDate = new Date();
     this.testString = "test ajah asdasd as asdasd asdasd asdasd asd";

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

    var mydate = 'Wed Feb 01 2017 21:54:24 GMT-0200';
    var date  = new Date(mydate);
    console.log(dateFormat(date,"longTime"));
    
  }

  showDateTimePicker(event){
   
  	this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
        date => { 
          event.target.value = date; 
          alert(dateFormat(new Date(date),"longTime"));
         
         },
        err => console.log('Error occurred while getting date: ' + err)
    );

  }

  public openCalendar():void{
     
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

  public showLoading(){

    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
     loading.present();
    this.reveurService.test().subscribe(response =>{
       loading.dismiss();
      alert(response.message);
      this.items = response;

    });
   
  

  }
 public checkAvailability(){


    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
     loading.present();
      this.reveurService.checkAvailability(this.motelId,this.dateCheckin,this.dateCheckout)
      .subscribe(response =>{
         loading.dismiss();

        
         this.navCtrl.push(RoomsPage,{items:response});
      },(err) => {
           alert("http error");
           loading.dismiss();
        });


      
    }
  public showRooms(items){

      this.navCtrl.push(RoomsPage,{items:items});
    }

    public bookRoom(room){
        this.navCtrl.push(BookPage,{items:room});
    }

 

}
