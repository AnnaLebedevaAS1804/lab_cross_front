import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
exports: [
CommonModule,
HttpClientModule,
BrowserAnimationsModule,
FormsModule,
MatToolbarModule,
MatFormFieldModule,
MatSidenavModule,
MatIconModule,
MatListModule,
MatSlideToggleModule,
MatInputModule,
MatButtonModule,
ReactiveFormsModule
],

})
export class SharedModule { }
