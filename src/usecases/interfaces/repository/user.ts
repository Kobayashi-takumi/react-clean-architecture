import { Executor } from "@/usecases/interfaces/executor";
import { User } from "@/domain/model/user";

export type GetUserExecutor = Executor<String, User>;
export type GetUsersExecutor = Executor<null | undefined, User[]>;
export type CreateUserExecutor = Executor<Omit<User, "id">, void>;
