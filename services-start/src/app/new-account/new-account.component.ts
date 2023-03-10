import { Component } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingSerice: LoggingService, private accountsSerice: AccountService) {
      this.accountsSerice.statusUpdated.subscribe(
        (status: string) => alert('New status: '+status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsSerice.addAccount(accountName, accountStatus);
    // this.loggingSerice.logStatusChange(accountStatus);
  }
}
