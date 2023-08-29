import { GetUserExecutor } from "@/usecases/interfaces/repository/user";
import { User } from "@/domain/model/user";

export type GetUserUseCase = (
  id: String,
  executor: GetUserExecutor
) => Promise<User>;

export const getUserUseCase: GetUserUseCase = async (
  id: String,
  executor: GetUserExecutor
) => {
  return await executor(id);
};
