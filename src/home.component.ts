import { Component } from '@angular/core';
import './polyfills';
import { ChangeDetectionStrategy, importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    RouterModule,
  ],
  template: `
    
    <mat-card>
      <mat-icon> dashboard </mat-icon>
      General Dashboard
      <mat-icon align="end"> refresh </mat-icon>
      <mat-tab-group>
      <mat-tab label="24 hours"> Content 1 </mat-tab>
      <mat-tab label="7 days"> Content 2 </mat-tab>
      <mat-tab label="14 days"> Content 3 </mat-tab>
      <mat-tab label="Total"> Content 1 </mat-tab>
      <mat-tab label="Channels"> Content 2 </mat-tab>
      <mat-tab label="Terminals"> Content 3 </mat-tab>
      <mat-tab label="Systems"> Content 1 </mat-tab>
      <mat-tab label="Methods"> Content 2 </mat-tab>
      <mat-icon> </mat-icon>
      </mat-tab-group> 
     </mat-card>

    <p>This Angular v14 is a companion to assist you with getting started with standalone components in Angular v14+.</p> 
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .toolbar {
        position: fixed;
        z-index: 2;
        display: flex;
        background-color:  #0c142c;
      }

      .toolbar > button {
        color: #fff;
      }

      .toolbar > span {
        margin-left: 16px;
      }

      .container {
        flex: 1 auto;
      }

      .content {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        color: #000;
        background: #fff;
      }
      .refresh {
        align-content: end;
      }

      main {
        margin-top: 64px;
        flex: 1 auto;
      }
    `,
  ],
})
export class HomeComponent {}
