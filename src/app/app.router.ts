import {RouterModule} from "@angular/router";
import {PapersComponent} from "../pages/papers/papers.component";
import {LabelsComponent} from "../pages/labels/labels.component";
import {PaperDetailComponent} from "../pages/paper-detail/paper-detail.component";
import {PaperEditComponent} from "../pages/paper-edit/paper-edit.component";

export const Router=RouterModule.forRoot([
  {
    path: 'papers',
    component: PapersComponent
  },{
    path: 'labels',
    component: LabelsComponent
  },{
    path: 'paper/:id',
    component: PaperDetailComponent
  },{
    path: 'paper/:id/edit',
    component: PaperEditComponent
  }
],{
  useHash: true
});
