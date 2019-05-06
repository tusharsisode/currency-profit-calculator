import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTabsModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatButtonModule, MatListModule,
  MatMenuModule, MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  declarations: []
})

export class MaterialModule { }
