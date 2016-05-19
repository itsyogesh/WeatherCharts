import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      // [city, city, city] and not [city, [city, city]]
      return [action.payload.data, ...state ];

  }
  return state;
}
