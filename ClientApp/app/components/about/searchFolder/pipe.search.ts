import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../user/user';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {


    transform(users: User[], term: string): User[] {

        if (term === undefined) return users;

        return users.filter(function (user) {
            return user.name.toLowerCase().includes(term.toLowerCase());
        })
    }
}