import { createUserUseCase } from "./create";
import { CreateUserExecutor } from "@/usecases/interfaces/repository/user";

describe("createUser", () => {
  const createUser: CreateUserExecutor = async () => {};
  it("execute", async () => {
    createUserUseCase("name", "id", createUser);
  });
});
