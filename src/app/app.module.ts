import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { BtcsearchComponent } from './btc/btcsearch/btcsearch.component';
import { BtcresultComponent } from './btc/btcresult/btcresult.component';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';
import { EtcsearchComponent } from './etc/etcsearch/etcsearch.component';
import { EtcresultComponent } from './etc/etcresult/etcresult.component';
import { LtcsearchComponent } from './ltc/ltcsearch/ltcsearch.component';
import { LtcresultComponent } from './ltc/ltcresult/ltcresult.component';

import { Btcresolver } from './btc/btcresolver';
import { Etcresolver } from './etc/etcresolver';
import { Ltcresolver } from './ltc/ltcresolver';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    BtcsearchComponent,
    BtcresultComponent,
    DataNotFoundComponent,
    EtcsearchComponent,
    EtcresultComponent,
    LtcsearchComponent,
    LtcresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [Btcresolver, Etcresolver, Ltcresolver, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
