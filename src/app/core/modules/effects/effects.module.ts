import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { FEATURE_EFFECTS, ROOT_EFFECTS } from './tokens';

NgModule({})
export class EffectsModule {
  static forFeature(
    featureEffects: Type<any>[]
  ): ModuleWithProviders<EffectsFeatureModule> {
    return {
      ngModule: EffectsFeatureModule,
      providers: [
        featureEffects,
        {
          provide: FEATURE_EFFECTS,
          multi: true,
          deps: featureEffects,
          useFactory: createSourceInstances
        }
      ]
    };
  }

  static forRoot(
    rootEffects: Type<any>[]
  ): ModuleWithProviders<EffectsRootModule> {
    return {
      ngModule: EffectsRootModule,
      providers: [
        EffectsRunner,
        EffectsSources,
        Actions,
        rootEffects,
        {
          provide: ROOT_EFFECTS,          
          deps: rootEffects,
          useFactory: createSourceInstances
        }
      ]
    };
  }
}

export function createSourceInstances(...instances: any[]){
  return instances;
}