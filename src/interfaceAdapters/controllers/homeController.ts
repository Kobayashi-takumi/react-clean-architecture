import { useEffect, useState, useCallback } from "react";
// import { GetUserUseCase } from "@/usecases/user/get";
import { GetUsersUseCase } from "@/usecases/user/list";
import { CreateUserUseCase } from "@/usecases/user/create";
import {
  // GetUserExecutor,
  CreateUserExecutor,
  GetUsersExecutor,
} from "@/usecases/interfaces/repository/user";
import { User } from "@/domain/model/user";

export const useHomeController = (
  userUseCase: {
    // get: GetUserUseCase;
    create: CreateUserUseCase;
    list: GetUsersUseCase;
  },
  userRepository: {
    // get: GetUserExecutor;
    create: CreateUserExecutor;
    list: GetUsersExecutor;
  }
) => {
  //   const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const createUser = useCallback(async () => {
    if (!name || !email) return;
    await userUseCase.create(name, email, userRepository.create);
    setName("");
    setEmail("");
  }, [name, email, setName, setEmail, userUseCase, userRepository]);

  useEffect(() => {
    // userUseCase.get("1", userRepository.get).then((res) => setUser(res));
    userUseCase.list(userRepository.list).then((res) => setUsers(res));
  }, []);

  return {
    users,
    name,
    setName,
    email,
    setEmail,
    createUser,
  };
};
