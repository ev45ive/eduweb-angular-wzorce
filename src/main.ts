import { enableProdMode, Injector, ReflectiveInjector, Injectable, Inject, } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

// StaticInjector
// var injector = ReflectiveInjector.resolveAndCreate([

@Injectable()
class Test {

    constructor(@Inject('dep') public test:string){
      console.log(test)
    }

}





// var injector = Injector.create([
var injector = ReflectiveInjector.resolveAndCreate([
  { provide: 'dep', useValue:'test' },
  { provide: 'test', useClass: Test }
])

var test = injector.get('test', 'fallback')

console.log(test)




class SelectionService{
  select(){}
  unselect(){}
  getSelection(){}
}

class DataSource{
  getData(){
    return [{name:'ItemA'}, {name:'ItemB'}]
  }
}






/*

* High-level object
* Low-level mechanisms
* Configuration
* Shared mechanism

*/