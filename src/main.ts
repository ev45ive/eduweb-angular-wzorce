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

class MockDataSource extends DataSource{
  data = 'test data'
  constructor(config){
    super(config)
  }
}

const reflective = ReflectiveInjector.resolveAndCreate([
  {
    provide: DATASOURCE_CONFIG,
    useValue: {
      sourceUrl: 'http://some.real.server/'
    }
  },
  DataSource,
  // {
  //   provide: DataSource,
  //   useClass: MockDataSource
  // }
  ComponentA
])
console.log(reflective.get(ComponentA))


/// app.ts
class App{
  getApiUrl(){
    return 'http://some.real.server/'
  }
  
  getDataSource(api_url){
    return new DataSource({
      sourceUrl: api_url
    })
  }

  getComponent(dataSource){
    new ComponentA(dataSource)
  }

  constructor(){
    this.getComponent(this.getDataSource(this.getApiUrl()))
  }
}
new App()

/// test.ts


class Test extends App{
  
  getDataSource(api_url){
    return new MockDataSource({})
  }
}
new Test()
