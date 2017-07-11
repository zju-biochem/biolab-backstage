import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PapersComponent } from '../pages/papers/papers.component';
import { LabelsComponent } from '../pages/labels/labels.component';
import { PaperDetailComponent } from '../pages/paper-detail/paper-detail.component';
import {LabelService} from "../services/label.service";
import {TreeModule} from "angular-tree-component";
import {Router} from "./app.router";

// import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { PaperEditComponent } from '../pages/paper-edit/paper-edit.component';
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    PapersComponent,
    LabelsComponent,
    PaperDetailComponent,
    PaperEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    FileUploadModule,
    Router
  ],
  providers: [LabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
