export default class UserService {
  private userRepository: any;

  constructor(repository: any) {
    this.userRepository = repository;
  }
}
