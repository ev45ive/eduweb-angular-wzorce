import { Injector, Injectable, Inject, ReflectiveInjector, InjectionToken } from "@angular/core";

export const DATASOURCE_MAIN_CONFIG = new InjectionToken('Data Source Main Configuration')
export const DATASOURCE_CONFIG = new InjectionToken('Data Source Configuration')

@Injectable()
class DataSource {
  data
  constructor( @Inject(DATASOURCE_CONFIG) private config) {
    this.data = ' data from ' + config.sourceUrl
  }
}

@Injectable()
class ComponentA {
  message = 'welcome message'

  constructor( @Inject(DataSource) private dataSource) {
    console.log('>>> Getting ' + this.dataSource.data)
  }
}

const injector = ReflectiveInjector.resolveAndCreate([
  {
    provide: DATASOURCE_CONFIG,
    useValue: {
      sourceUrl: 'http://some.real.server/'
    }
  },
  DataSource,
])

const childInjector = ReflectiveInjector.resolveAndCreate([
  ComponentA
], injector)

const childInjector2 = ReflectiveInjector.resolveAndCreate([
  ComponentA
], injector)

console.log(childInjector.get(ComponentA))
console.log(childInjector2.get(ComponentA))