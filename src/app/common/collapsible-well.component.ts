import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    templateUrl: 'collapsible-well.component.html',
    styles: [``]
})
export class CollapsibleWellComponent{
    visible:boolean = true

    toggleContent(){
        this.visible = !this.visible
    }
    
}