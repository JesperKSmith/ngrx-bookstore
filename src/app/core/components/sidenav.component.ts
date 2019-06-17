import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'js-sidenav',
  template: `
    <mat-sidenav #sidenav [opened]="open" (keydown.escape)="sidenav.close()" (closedStart)="closeMenu.emit()" disableClose>
      <mat-nav-list>
        <ng-content></ng-content>        
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
      mat-sidenav {
        width: 300px;
      }
    `
  ]
})
export class SideNavComponent {
  @Input() open = false;
  @Output() closeMenu = new EventEmitter();
}
