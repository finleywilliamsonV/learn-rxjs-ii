import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map, take, tap } from 'rxjs/operators'
import { TrimmedUser } from '../models/trimmed-user.model'
import { UserApiResult, UserData } from '../models/user-api-result.model'

@Injectable({
    providedIn: 'root',
})
export class UserApiService {

    /**
     * Cached storage of requested users
     */
    private readonly userCache: Record<string, TrimmedUser>

    /**
     * Constructs the Users Service
     * @param httpClient
     */
    // eslint-disable-next-line no-unused-vars
    constructor(private httpClient: HttpClient) {
        this.userCache = {}
    }

    /**
     * Fetches a user from the API, or the cache if already fetched
     * @param id (optional) the id of the user to retrieve
     * @returns An observable of the trimmed user data
     */
    getUser(id?: string): Observable<TrimmedUser> {

        // attempt to retreive from cache
        if (id && this.userCache.id) {
            return of(this.userCache.id)
        }

        // fetch user data from endpoint and parse
        return this.httpClient.get<UserApiResult>('https://randomuser.me/api/')
            .pipe(
                map(UserApiService.trimUser),
                tap((trimmedUser) => {
                    this.userCache[trimmedUser.id] = trimmedUser
                }),
                take(1)
            )
    }

    /**
     * Parses User API data into a TrimmedUser
     * @param apiResult Result from the User API endpoint
     * @returns The parsed user data
     */
    private static trimUser(apiResult: UserApiResult): TrimmedUser {
        const userData: UserData = apiResult.results[0]
        return {
            gender: userData.gender,
            name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
            email: userData.email,
            dob: new Date(userData.dob.date),
            id: userData.id.value,
            picture: userData.picture.large,
        } as TrimmedUser
    }
}
