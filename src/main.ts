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
  constructor(@Inject(DataSource) private dataSource){
    console.log('>>> Getting ' + this.dataSource.data)
  }
}

@Injectable()
class MockDataSource extends DataSource{
  data = 'test data'
  constructor(){
    super({ sourceUrl: 'mock'})
  }
}

const providers = [
  {
    provide: DATASOURCE_CONFIG,
    useValue: {
      sourceUrl: 'http://some.real.server/'
    }
  },
  DataSource,
  ComponentA
]
const reflective = ReflectiveInjector.resolveAndCreate(providers)
console.log(reflective.get(ComponentA))


const test = ReflectiveInjector.resolveAndCreate([
  providers,
  {
    provide: DataSource,
    useClass: MockDataSource
  },
  ComponentA
])
console.log(test.get(ComponentA))
