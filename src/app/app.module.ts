import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SignupPage} from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {MainPage} from '../pages/main/main';
import {MenuPage} from '../pages/menu/menu';
import {RoomsPage} from '../pages/rooms/rooms';
import {BooksPage} from '../pages/book/book';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignupPage,
    LoginPage,
    TabsPage,
    MainPage,
    RoomsPage,
    BookPage,
    MenuPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
     SignupPage,
    LoginPage,
    MainPage,
    RoomsPage,
    BookPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
