import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
/**
 * Generated class for the SerchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serch',
  templateUrl: 'serch.html',
})
export class SerchPage {

  keywords: string = "";
  events: any[] = [];

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController,
     public eventProvider: EventProvider,
   ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerchPage');
  }

  getEvents(ev) {
    console.log(this.keywords);
    const searchKeywords:string = this.keywords.trim();

    if (!searchKeywords) return;

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    const kwds = searchKeywords.split(' ').filter(v => v !== "");

    this.eventProvider.search(kwds).subscribe((body: any) => {
      if (body && body.events) {
        if (this.keywords === searchKeywords) {
          this.events = body.events;
        }
      }
      loader.dismiss();
    }, (error: any) => {
      loader.dismiss();
    })
  }

  openEvent(event) {
    this.navCtrl.push('EventDetailPage', {
      eventId: event.event_id,
      event: event
    });
  }

}
