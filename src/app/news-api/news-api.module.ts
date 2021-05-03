import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaArticlelistComponent } from './na-articlelist/na-articlelist.component';
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NaArticlelistComponent, TrimOutletNamePipe],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NaArticlelistComponent]
})
export class NewsApiModule { }
