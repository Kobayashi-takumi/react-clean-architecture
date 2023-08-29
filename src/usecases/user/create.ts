import { CreateUserExecutor } from "@/usecases/interfaces/repository/user";

export type CreateUserUseCase = (
  name: String,
  email: String,
  executor: CreateUserExecutor
) => Promise<void>;

export const createUserUseCase: CreateUserUseCase = async (
  name: String,
  email: String,
  executor: CreateUserExecutor
) => {
  await executor({ name, email });
};
