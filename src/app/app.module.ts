import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TreeComponent } from './tree/tree.component';
import { StackComponent } from './stack/stack.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    StackComponent,
    DatagridComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
