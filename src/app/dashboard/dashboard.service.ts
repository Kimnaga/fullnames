import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class DashboardService {
  searchHistoryRef: any;
  constructor(
    private loginService: LoginService,
    private db: AngularFireDatabase,
    ) {
    //this.searchHistoryRef = this.db.list(`currentSession/${this.loginService.userUid}/searches`);
  }

  getSearchHistory() {
    return this.searchHistoryRef.valueChanges();
  }

  getFirstName(){
    return this.db.list('names/first-names').valueChanges();
  }

  getLastName(){
    return this.db.list('names/last-names').valueChanges();
  }

  insert(fullnames){
    //this.db.push('names/first-names')
  }
}
