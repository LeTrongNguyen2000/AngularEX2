import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    // @Input() name: string | undefined;
    name = 'Nguyen';

    ngOnInit(){
        console.log("Hello init");
        
    }

    ngDestroy() {
        console.log("Hello Destroy");
        
    }
}