import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

import { AppState } from '@app/store/app-store.module';
import { SetInitialUser } from '@app/store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-ideas-app';

  constructor(
    private store: Store<AppState>,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.store.dispatch(new SetInitialUser());
    this.store
      .select(state => state.error)
      .subscribe(val => this.showError(val.error));
  }

  showError(err) {
    if (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error Message',
        detail: err.message || 'Internal server error'
      });
    }
  }
}
