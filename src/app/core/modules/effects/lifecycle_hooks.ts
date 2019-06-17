import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

/*
* ```ts
* class EffectWithIdentifier implements OnIdentifyEffects {
*  constructor(private effectIdentifier: string) {}
*
*  ngrxOnIdentifyEffects() {
*    return this.effectIdentifier;
*  }
* ```
*/  


export interface OnIdentifyEffects {
  ngrxOnIdentifyEffects(): string;
}

export const onIdentifyEffectsKey: keyof OnIdentifyEffects = 'ngrxOnIdentifyEffects';
export type onRunEffectsFn = (
  resolvedEffects$: Observable<EffectNotification>
) => Observable<EffectNotification>;

export class UserEffects implements OnRunEffects {
  constructor(private actions$: Actions) {}
}