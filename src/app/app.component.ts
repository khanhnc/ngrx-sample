import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface AppState {
  message: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'ngxs-test';
  message$: Observable<string>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute ){
    this.message$ = this.store.select('message');
  }

  ngOnInit(){
    this.message$.subscribe(res => {
      console.log("test", res)
    })
  }

  ngOnChanges(){
    console.log("changed")
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }
}
