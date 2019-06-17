import { InjectionToken } from '@angular/core';

export const IMMEDIATE_EFFECTS = new InjectionToken<any[]>(
  'ngrx/effects: Immediate Effects'
);
export const ROOT_EFFECTS = new InjectionToken<any[]>(
  'ngrx/effects: Root Effects'
);
export const FEATURE_EFFECTS = new InjectionToken<any[][]>(
  'ngrx/effects: Feature Effects'
);

