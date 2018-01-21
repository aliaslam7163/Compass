import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
import { TodosPage } from '../todos/todos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  directoryHome(){
      this.navCtrl.push(DirectoryPage);
  }

  TODOHome()
  {
    this.navCtrl.push(TodosPage);
  }

}
