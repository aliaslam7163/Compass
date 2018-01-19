import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { StorageProvider } from './../../providers/storage/storage';
//import { FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { OnInit } from '@angular/core';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage{
    directory=
    [
      {
        address:"4906 Rue Jean-Talon Ouest, Montreal, QC H4P 1W9",category:"Essentials",email:"Not Available",hashed:"021ee56525d100ec963fac80ef0191ac",
        info:"clothing, furniture, home, accessories, and more",name:"Village des Valeurs (Jean-Talon Ouest)",phone:"+15147391962"
      },
      {
        address:"5165 Chemin Queen Mary #350, Montréal, QC H3W 1X7",category:"Education",email:"www.alac.qc.ca",hashed:"039ea4e8bb04948343a7376e44df1c17",
        info:"French courses",name:"ALAC",phone:"+15147373642"
      },
      {
        address:"1 Mont-Royal Ave E, Montreal, QC H2T 1N4",category:"Health / Medical",email:"Not Available",hashed:"03aa882e580d2c15fd42f4a05dc4dc01",
        info:"Medical exam available",name:"Clinique Luso Examen Médical (Mont-Royal Ave E)",phone:"+15148492391"
      },
      {
        address:"2020 Saint-Catherine St, Montreal, QC H3H 2T3",category:"Essentials",email:"Not Available",hashed:"124c7d34ed24d5eb44348b0d7ecc009f",
        info:"Cheap copying and printing",name:"Clip (Saint-Catherine St)",phone:"+15149394442"
      },
      {
        address:"5762 Rue Sherbrooke Ouest, Montréal, QC H4A 1X1",category:"Essentials",email:"Not Available",hashed:"1acd3c049eee08831a9cc36014670488",
        info:"clothing, furniture, home, accessories, and more",name:"Salvation Army (Sherbooke Ouest)",phone:"+15144888714"
      },
    ];
    connectionType :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage,
              public db: AngularFireDatabase,
              public firebaseProvider : FirebaseProvider,
              private network : Network,
              private storageProvider: StorageProvider) {

                this.storage.get('directory').then((localDirectory:any) => {
                  if(localDirectory)
                  {
                    //console.log('im in here');
                    if(localDirectory.length > this.directory.length)
                    {
                      this.directory=localDirectory;
                    }
                    else
                    {
                      this.directory = this.storageProvider.getFBDirectory();
                    }
                  }
                });
                  this.connectionType = this.network.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

}
