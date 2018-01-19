import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  constructor(public http:Http,
              public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getDirectoryItems(){
  return this.afd.list('/directory/');
  }

  getQuestions(){
    return this.afd.list('/questions/');

  }
  todosItems(){
    return this.afd.list('/todos/');
  }
  updateItems(){
    return this.afd.list('/updates/');
  }
  userItems(){
    return this.afd.list('/users/');
  }

  sendQuestion(){
    return this.afd.list('/questions/').push({});
  }

}
