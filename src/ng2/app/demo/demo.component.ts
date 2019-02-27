import {Component,OnInit,Inject} from "@angular/core";
import {TEST_SERVICE} from "src/ng2/app/test.service";
console.log(TEST_SERVICE);
@Component({
selector: 'demo',
  template: `
    <h3>Angular 2 Demo Component</h3>
    `
})

export class DemoComponent implements OnInit{

    constructor(
        @Inject(TEST_SERVICE) private testService: any) {
        }
   
        ngOnInit() {
          console.log( this.testService);
        }
}