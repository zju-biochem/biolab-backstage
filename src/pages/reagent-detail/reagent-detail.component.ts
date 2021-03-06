import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {ReagentDetail} from '../../classes/reagent';
import { FileUploader } from 'ng2-file-upload';
import {CONST} from '../../app/const';
import {ReagentService} from '../../services/reagent.service';
import {NzMessageService} from 'ng-zorro-antd';



@Component({
  selector: 'app-reagent-detail',
  templateUrl: './reagent-detail.component.html',
  styleUrls: ['./reagent-detail.component.scss']
})
export class ReagentDetailComponent implements OnInit {
  public uploader:FileUploader;
  reagent: ReagentDetail;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private reagentService: ReagentService,
    private messageSvc: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params)=>{
        this.freshReagent(params['id']).then(()=>{
          this.uploader=new FileUploader({url: `${CONST.apiUrl}/reagent/${this.reagent.id}/picture/add/`});
        });
      });
  }

  freshReagent(reagentId=this.reagent.id){
    return this.api.get(`/reagent/${reagentId}/detail/`).then(data=>{
      this.reagent=data;
      return;
    });
  }


  removePicture(pictureId){
    if (confirm('确定要删除这张图片吗？')) {
      this.api.get(`/reagent/picture/${pictureId}/remove/`).then(()=>{
        this.freshReagent();
      });
    }
  }

  movePicture(pictureId,direction:'up'|'down'){
    this.api.get(`/reagent/picture/${pictureId}/move/`,{
      direction:direction
    }).then(()=>{
      this.freshReagent();
    });
  }

  editPictureDescription(pictureId){
    const description=prompt('请输入对这张图片的描述');
    this.api.post(`/reagent/picture/${pictureId}/editDescription/`,{
      description: description
    }).then(()=>{
      this.freshReagent();
    });
  }

  async remove() {
    await this.reagentService.removeReagent(this.reagent.id);
    this.messageSvc.success('删除成功');
    await this.router.navigate(['/reagent', 'list', 1]);
  }

}
