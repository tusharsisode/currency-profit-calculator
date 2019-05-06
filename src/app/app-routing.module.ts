import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BtcresultComponent } from './btc/btcresult/btcresult.component';
import { BtcsearchComponent } from './btc/btcsearch/btcsearch.component';
import { EtcsearchComponent } from './etc/etcsearch/etcsearch.component';
import { EtcresultComponent } from './etc/etcresult/etcresult.component';
import { LtcsearchComponent } from './ltc/ltcsearch/ltcsearch.component';
import { LtcresultComponent } from './ltc/ltcresult/ltcresult.component';

import { Btcresolver } from './btc/btcresolver';
import { Etcresolver } from './etc/etcresolver';
import { Ltcresolver } from './ltc/ltcresolver';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'btc', component: BtcsearchComponent },
  { path: 'btc/results', component: BtcresultComponent, resolve: { currency: Btcresolver } },
  { path: 'etc', component: EtcsearchComponent },
  { path: 'etc/results', component: EtcresultComponent, resolve: { currency: Etcresolver } },
  { path: 'ltc', component: LtcsearchComponent },
  { path: 'ltc/results', component: LtcresultComponent, resolve: { currency: Ltcresolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
