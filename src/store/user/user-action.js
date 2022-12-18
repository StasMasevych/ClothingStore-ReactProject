import { USER_ACTIONS_TYPES } from './user-types'
import {createAction} from '../../utils/reducer/reducer'


 export const setCurrentUser = (user) => 
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
  