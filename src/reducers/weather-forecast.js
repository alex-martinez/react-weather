import { FETCH_WEATHER_FORECAST } from '../actions/index';

// export default function(state = [austin], action) {
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER_FORECAST:
      return [ action.payload, ...state ];
    default:
      return state;
  }
}
