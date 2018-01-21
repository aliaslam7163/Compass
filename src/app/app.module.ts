import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/* Pages created by Development Team */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DirectoryPage } from '../pages/directory/directory';
import { TodosPage } from '../pages/todos/todos';

/* Providers created by development team */
import { StorageProvider } from '../providers/storage/storage';
import { FirebaseProvider } from '../providers/firebase/firebase';

/*Providers/imports required by ionic/angular for development */
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Firebase Authorization credentials */
var firebaseAuth = {
  apiKey: "AIzaSyBK2FYCKx8Kn8kqjLkhgXtNasS32fqjIGo",
  authDomain: "myionicapp-298c7.firebaseapp.com",
  databaseURL: "https://myionicapp-298c7.firebaseio.com",
  projectId: "myionicapp-298c7",
  storageBucket: "myionicapp-298c7.appspot.com",
  messagingSenderId: "359793712146"
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DirectoryPage,
    TodosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DirectoryPage,
    TodosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    FirebaseProvider,
    AngularFireDatabase,
    Network,
  ]
})
export class AppModule {}
