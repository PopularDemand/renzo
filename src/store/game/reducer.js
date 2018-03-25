import { GAME_TYPES } from './actions';

const initialState = {
  isLoading: false,
  error: null,
  subscription: null,
  game_id: null
};

export default function(state, action) {
  if (!state) return initialState;

  switch (action.type) {
    case GAME_TYPES.CREATE_REQUEST:
      return {
        ...initialState,
        ...state,
        isLoading: true
      };

    case GAME_TYPES.CREATE_SUCCESS:
      return {
        ...initialState,
        ...state,
        ...action.body.game,
        isLoading: false
      };

    case GAME_TYPES.CREATE_FAILURE:
      return {
        ...initialState,
        ...state,
        error: action.error,
        isLoading: false
      };

    case GAME_TYPES.SUBSCRIBE_REQUEST:
      return {
        ...initialState,
        ...state,
        isLoading: true
      };

    case GAME_TYPES.SUBSCRIBE_SUCCESS:
      return {
        ...initialState,
        ...state,
        channel: action.body.channel,
        isLoading: false
      };

    case GAME_TYPES.SUBSCRIBE_FAILURE:
      return {
        ...initialState,
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return { ...initialState, ...state };
  }
}
