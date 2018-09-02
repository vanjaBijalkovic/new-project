import { user } from '../constants/user'

export default class UserService {
  getUser() {
    return user;
  }
}

export const userService = new UserService();