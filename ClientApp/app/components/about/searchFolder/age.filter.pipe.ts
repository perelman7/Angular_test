import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../user/user';

@Pipe({
    name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {


    transform(users: User[], ageValue: any): User[] {

        if (ageValue === undefined) return users;

        return users.filter(function (user) {
            return user.age < ageValue;
        })
    }
}