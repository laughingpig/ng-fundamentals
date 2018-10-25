import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em{color:red; float:right; padding-left:10px;}
    .error input { background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder{ color: red;}
  `]    
})
export class CreateEventComponent{
    newEvent
    isDirty:boolean = true;
    
    constructor(private eventService:EventService, private router: Router){

    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}