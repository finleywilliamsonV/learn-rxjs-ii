import { Component, OnInit } from '@angular/core'
import { mergeMap } from 'rxjs/operators'
import { User } from '../../models/user.model'
import { UserApiService } from '../../services/user-api.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    users!: User[]

    constructor(private userApiService: UserApiService) {
        mergeMap()
    }

    ngOnInit(): void {
    }

}
