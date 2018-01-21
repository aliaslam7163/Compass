import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { StorageProvider } from './../../providers/storage/storage';
//import { FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { OnInit } from '@angular/core';
import { Network } from '@ionic-native/network';


/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
  localTODOS = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebase:FirebaseProvider,
              private storageProvider:StorageProvider,
              private storage: Storage) {
    this.storageProvider.todosItems();
  }

  getTODOSItems(){
    this.storage.get('todos').then((todos) =>{
      if(todos)
      {
        this.localTODOS = todos;
        console.log(this.localTODOS);
      }
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

}
