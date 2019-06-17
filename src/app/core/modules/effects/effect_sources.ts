import { Injectable, ErrorHandler } from "@angular/core";
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class EffectSources extends Subject<any> {
  constructor(private errorHandler: ErrorHandler, private store: Store<any>) {
    super();
  }

  addEffects(effectSourceInstance: any) {
    this.next(effectSourceInstance);

    if(
      onInitEffects in effectSourceInstance && 
      typeof effectSourceInstance[onInitEffects] === 'function'
    ) {
        this.store.dispatch(effectSourceInstance[onInitEffects]());
      }
  }

  /* MISSING REMAINING */
}