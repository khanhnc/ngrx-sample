import { ReturnStatement } from '@angular/compiler';
import { Action}from '@ngrx/store'


export function simpleReducer ( state: string = 'Hello world!', action: Action) {
    console.log("foo", action.type, state);
    
    switch (action.type) {
        case 'SPANISH': 
        return state = 'Hola Mundo'

        case 'FRENCH':
            return state = 'Bonjoiur le monde'
            
        default: 
            return state;
    }
}
