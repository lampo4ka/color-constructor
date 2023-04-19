import { useSyncExternalStore } from 'react';

type Action =  { type: string, payload: any };

const createStore = <TState extends object>(reducer: (state: TState, action: Action) => TState, initialState: TState) => {
    const listeners = new Set<any>();
    let state = initialState;

    const dispatch = (action: Action) => {
        state = reducer(state, action);
        listeners.forEach(listener => { listener() })
    }

    const subscribe = (listener: any) => {
        listeners.add(listener);

        return () => listeners.delete(listener);
    }

    return {
        getState: () => state,
        dispatch,
        subscribe
    };

}

const initialState = {
    name: 'Kristina',
    age: 31,
    hobbies: [
        {
            type: 'knitting',
            experience: 1
        },
        {
            type: 'running',
            experience: 3
        },

    ],
    cats: 0,
    dogs: 0

}

const reducer = (state: typeof initialState, action: Action) => {
    const {type, payload} = action;
    switch (type) {
        case 'changeName':
            return {
                ...state,
                name: payload,
            }
        case 'addHobby':
            return {
                ...state,
                hobbies: [...state.hobbies, payload ]
            }
        case 'updateHobby':
            return {
                ...state,
                hobbies: state.hobbies.map(hobby =>
                    hobby.type === payload.type
                    ? {...hobby, experience: payload.experience}
                    : hobby
                )
            }
        case 'addPets':
            return {
                ...state,
                cats: payload.cats,
                dogs: payload.dogs
            }
        default: 
            return state;
    }
}

const store = createStore(reducer, initialState);

store.dispatch({ type: 'changeName', payload: 'newKristina' });
store.dispatch({
    type: 'addHobby',
    payload:{
        type: 'illustration',
        experience: 0
    }
});
store.dispatch({
    type: 'updateHobby',
    payload:{
        type: 'illustration',
        experience: 1
    }
});
store.dispatch({
    type: 'addPets',
    payload:{
        cats: 1,
        dogs: 1
    }
});
// console.log(store.getState()) // { name: 'vlad' }

export const useSelector = <
    TReturn extends any,
>(selector: (state: any) => TReturn) => {
    return useSyncExternalStore(store.subscribe, () => selector(store.getState()));
}

export const useDispatch = () => {
    return store.dispatch;
}