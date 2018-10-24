import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class DashboardService {
  searchHistoryRef: any;
  constructor(
    private loginService: LoginService,
    private db: AngularFireDatabase,
    ) {
    this.searchHistoryRef = this.db.list(`currentSession/${this.loginService.userUid}/searches`);
  }

  getSearchHistory() {
    return this.searchHistoryRef.valueChanges();
  }

  setSearchHistory(text){
    var timeStamp = new Date().toDateString();
    this.searchHistoryRef.push({
      searchText : text,
      time : timeStamp
    })
  }

  getNames (){
    return this.db.list('names').valueChanges();
  }

  insert(fullnames){
    this.db.list('/names').push({
      firstName : fullnames.firstName,
      lastName : fullnames.lastName
    })
  }
}
