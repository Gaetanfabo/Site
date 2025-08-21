import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { Router } from "express";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HeaderComponent,
    RouterModule.forRoot([
    ]),
  ],
  providers: [],
})
export class AppModule {} 