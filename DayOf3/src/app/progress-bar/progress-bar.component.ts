import { Component, Input } from "@angular/core";

@Component ({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
    
})

export class ProgressBarComponent{
    @Input() set progress(val: number){
        //Validation
        if(typeof val !== "number"){
            const progress = Number(val);
            if(Number.isNaN(progress)){
                this._progress = 0;
            } else {
                this._progress = progress;
            }
        }
        this._progress = val;
    }

    private _progress = 10;
    get progress(){
        return this._progress;
    }

    //@Input() progress = 50;
    @Input() backgroundColor = '#ccc';
    @Input() progressColor = 'tomato';
}