import { Component, OnInit } from '@angular/core';
import { timer,  interval, fromEvent, Observable, pipe, of } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.sass']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.TimerAndinterval();
    //  this.fromEvent();
        this.mapAndFilter();
    
    
  }

  mapAndFilter(){

    const elementList = of({name: "Jose"}, {name: "Esthefania"}, {name: "Gema Ross"});

    const mapAndFilterObservable = pipe(
      filter((persona: any) => persona.name=="Jose" || persona.name=="Esthefania"),
      map(persona => {
        persona.name=persona.name
        persona.info="Ellos son esposos " 
        return persona
      })
    )

    const mapAndFilterObservableSuscriber=mapAndFilterObservable(elementList)

    mapAndFilterObservableSuscriber.subscribe(val => console.log(val))

  }

  fromEvent(){
    const fromtEventObservable = fromEvent(document.getElementById("fromEventDiv"), "mousemove")

    fromtEventObservable.subscribe((val: MouseEvent) => console.log(`EjeX: ${val.clientX}, EjeY: ${val.clientY}`));
  }

  TimerAndinterval(){
    const intervalObservable = interval(1000)
    const timerObservable = timer(5000)

    intervalObservable.subscribe(val => {
      console.log(`${val}`)
    })

    timerObservable.subscribe(val => {
      console.log("Hola Mundo", val);
    })
  }

}
