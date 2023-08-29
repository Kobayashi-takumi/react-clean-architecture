import { GetUsersExecutor } from "@/usecases/interfaces/repository/user";
import { User } from "@/domain/model/user";

export type GetUsersUseCase = (executor: GetUsersExecutor) => Promise<User[]>;

export const getUsersUseCase: GetUsersUseCase = async (
  executor: GetUsersExecutor
) => {
  return await executor(null);
};
