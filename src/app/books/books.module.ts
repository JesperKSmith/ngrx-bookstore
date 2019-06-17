import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { BooksRoutingModule } from './books-routing.module';

export const CONTAINERS = [
  CollectionPageComponent
];

export const COMPONENTS = [

];


@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    MaterialModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
