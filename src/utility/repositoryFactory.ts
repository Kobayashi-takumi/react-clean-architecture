import {
  getUserExecutor,
  getUsersExecutor,
  createUserExecutor,
} from "@/infrastructure/inMemory/repository/user";
import {
  GetUserExecutor,
  GetUsersExecutor,
  CreateUserExecutor,
} from "@/usecases/interfaces/repository/user";

export abstract class RepositoryFactory {
  abstract getUserExecutor: GetUserExecutor;
  abstract getUsersExecutor: GetUsersExecutor;
  abstract createUserExecutor: CreateUserExecutor;
}

export class MemoryRepositoryFactory {
  getUserExecutor: GetUserExecutor;
  createUserExecutor: CreateUserExecutor;
  getUsersExecutor: GetUsersExecutor;
  constructor() {
    this.getUserExecutor = getUserExecutor;
    this.createUserExecutor = createUserExecutor;
    this.getUsersExecutor = getUsersExecutor;
  }
}

export const memoryRepositoryFactory = new MemoryRepositoryFactory();
