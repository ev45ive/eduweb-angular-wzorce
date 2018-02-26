
class DataSource{
  data
  constructor(private config){
    this.data = ' data from ' + config.sourceUrl
  }
}

class MockDataSource extends DataSource{
  data = 'test data'
  constructor(config){
    super(config)
  }
}

class ComponentA{

  constructor(private dataSource){
    console.log('>>> Getting ' + this.dataSource.data)
  }
}


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
