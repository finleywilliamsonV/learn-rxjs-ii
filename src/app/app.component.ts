import { Component } from '@angular/core'
import {
    forkJoin, from, Observable, of
} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'learn-rxjs-ii'

    constructor() {
        const number$: Observable<number> = of(1, 2, 3)
        const string$: Observable<string> = from(['a', 'b', 'c'])
    //   const fork$: Observable<unknown> = forkJoin;
    }
}
