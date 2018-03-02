import { Injector, Injectable, Inject, ReflectiveInjector, InjectionToken } from "@angular/core";

export const DATASOURCE_CONFIG = new InjectionToken('Data Source Configuration')

@Injectable()
class DataSource{
  data
  constructor(@Inject(DATASOURCE_CONFIG) private config){
    this.data = ' data from ' + config.sourceUrl
  }
}

@Injectable()
class ComponentA{
  message = 'welcome message'

  constructor(@Inject(DataSource) private dataSource){
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
  ComponentA
])
console.log(injector.get(ComponentA))