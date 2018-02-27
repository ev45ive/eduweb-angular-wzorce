import { Injector } from "@angular/core";

class DataSource{
  data
  constructor(private config){
    this.data = ' data from ' + config.sourceUrl
  }
}

class ComponentA{
  constructor(private dataSource){
    console.log('>>> Getting ' + this.dataSource.data)
  }
}

const injector = Injector.create({
  providers:[
    {
      provide: 'api_url',
      useValue: 'http://some.real.server/'
    },
    {
      provide: 'data_source',
      useFactory: (url) => {
        return new DataSource({
          sourceUrl: url
        })
      },
      deps:['api_url']
    },
    {
      provide: 'componentA',
      useClass: ComponentA,
      deps:['data_source']
    }
  ]
})

console.log(injector.get('componentA'))

/*
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

class MockDataSource extends DataSource{
  data = 'test data'
  constructor(config){
    super(config)
  }
}

class Test extends App{
  
  getDataSource(api_url){
    return new MockDataSource({})
  }
}
new Test()
*/