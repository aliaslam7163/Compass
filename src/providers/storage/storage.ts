import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
//import { FirebaseListObservable } from 'angularfire2/database';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  startupVal:any;
  localDirectory=[];
  localTODOList = [];
  i:number=0;
  constructor(public http: Http,
              private storage:Storage,
              public db:AngularFireDatabase,
              public firebaseProvider : FirebaseProvider,
              private network: Network,
              private platform:Platform) {
    //console.log('Hello StorageProvider Provider');
  }

 /* Initial Startup code */
  startup(){
    this.storage.get('newDLTimeStamp').then((retValue:any) => {
      if(retValue)
      {
        //console.log(retValue);
        this.startupVal = 1;
        this.getLocalDirectory();
      }
      else{
        this.storage.set('newDLTimeStamp',Date.now()).then((setDone) => {
          if(setDone)
          {
            if(!(this.platform.is('core')))
            {
              if(this.network.type != '')
              {
                this.getFBDirectory();
              }
              else{
                this.network.onConnect().subscribe((data) =>{
                  if(data.type != '')
                  {
                      this.getFBDirectory();
                  }
                });
                this.getLocalDirectory();
              }
            }
          }
        });
      }
    });
    return this.startupVal;
  }

  getLocalDirectory(){
    this.storage.get('directory').then((returnVal:any) => {
      //console.log(returnVal);
    });
  }

/* Saves Class Variable LocalDirectory into Local Storage */
  saveLocalDirectory(){
      this.storage.set('directory',this.localDirectory);
  }

/* Get Firebase Directory and stores it into Local Directory */
  getFBDirectory(){
    this.firebaseProvider.getDirectoryItems().valueChanges()
    .subscribe(elementsInFBDirectory => {
  //  console.log(elementsInFBDirectory);
    elementsInFBDirectory.forEach(item =>{
      this.localDirectory[this.i] = item;
      this.i = this.i + 1;
    });
      console.log(this.localDirectory);
      this.saveLocalDirectory();

  });
    //console.log(this.directoryStorage);
    return this.localDirectory;
  }


 /* Get the TODOs Items from the FB and inset them into local storoage */
  todosItems(){
    this.firebaseProvider.todosItems().valueChanges()
    .subscribe(elements => {
  //  console.log(elements);
    elements.forEach(item =>{
      this.localTODOList[this.i] = item;
      this.i = this.i + 1;
    });
      console.log(this.localTODOList);
      this.saveLocalTODO();

  });
    //console.log(this.directoryStorage);
    return this.localTODOList;
  }

  /* Saves Class Variable localTODOList into Local Storage */
    saveLocalTODO(){
        this.storage.set('todos',this.localTODOList);
    }


}
