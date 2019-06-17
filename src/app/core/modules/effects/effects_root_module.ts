import { NgModule, Inject, Optional } from "@angular/core";
import { ROOT_EFFECTS } from './tokens';
import { StoreRootModule, StoreFeatureModule, Store } from '@ngrx/store';

@NgModule({})
export class EffectsRootModule {
  constructor(
    private sources: EffectSources,
    runner: EffectsRunner,
    store: Store<any>,
    @Inject(ROOT_EFFECTS) rootEffects: any[],
    @Optional() storeRootModule: StoreRootModule,
    @Optional() storeFeatureModule: StoreFeatureModule,
  ) {
    runner.start();

    rootEffects.forEach(effectSourceInstance => 
      sources.addEffects(effectSourceInstance)
    );

    store.dispatch({ type: ROOT_EFFECTS_INIT });
  }

  addEffects(effectSourceInstance: any) {
    this.sources.addEffects(effectSourceInstance);
  }
}