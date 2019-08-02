import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthService } from '@app/services/auth.service';
import { ApiService } from '@app/services/api.service';
import { AppStoreModule } from '@app/store/app-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppStoreModule],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
