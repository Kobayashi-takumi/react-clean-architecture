import { getUserUseCase, GetUserUseCase } from "@/usecases/user/get";
import { createUserUseCase, CreateUserUseCase } from "@/usecases/user/create";
import { getUsersUseCase, GetUsersUseCase } from "@/usecases/user/list";

export class UseCaseFactory {
  public getUserUseCase: GetUserUseCase;
  public createUserUseCase: CreateUserUseCase;
  public getUsersUseCase: GetUsersUseCase;
  constructor() {
    this.getUserUseCase = getUserUseCase;
    this.createUserUseCase = createUserUseCase;
    this.getUsersUseCase = getUsersUseCase;
  }
}
export const useCaseFactory = new UseCaseFactory();
