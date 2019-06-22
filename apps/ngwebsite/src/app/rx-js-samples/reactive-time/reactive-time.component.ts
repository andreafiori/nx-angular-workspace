import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, timer, Subject } from 'rxjs';

@Component({
  selector: 'nxprojects-reactive-time',
  templateUrl: './reactive-time.component.html',
  styleUrls: ['./reactive-time.component.css']
})
export class ReactiveTimeComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  date$ = new Subject();

  everyMinute$: Observable<number> = timer(0, 60000);
  everySecond$: Observable<number> = timer(0, 1000);

  constructor() { }

  ngOnInit() {
    this.subscription.add(this.everyMinute$.subscribe(minute => minute));
    this.subscription.add(this.everySecond$.subscribe(second => second));
    this.subscription.add(this.date$.subscribe(next => next));

    setInterval(() => {
      this.date$.next(new Date());
    }, 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
