import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models';

@Component({
  selector: 'js-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.less']
})
export class CollectionPageComponent implements OnInit {

  books$: Observable<Book[]>;
  
  // TODO: Implement NgRx

  constructor() { }

  ngOnInit() {
  }

}
