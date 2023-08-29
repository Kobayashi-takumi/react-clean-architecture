import { useHomeController } from "@/interfaceAdapters/controllers/homeController";
import { useCaseFactory } from "@/utility/usecaseFactory";
import { memoryRepositoryFactory } from "@/utility/repositoryFactory";

function App() {
  const { users, name, setName, email, setEmail, createUser } =
    useHomeController(
      {
        create: useCaseFactory.createUserUseCase,
        list: useCaseFactory.getUsersUseCase,
      },
      {
        create: memoryRepositoryFactory.createUserExecutor,
        list: memoryRepositoryFactory.getUsersExecutor,
      }
    );
  return (
    <div className="App">
      {users.map((user, index) => (
        <>
          <p>{user?.id}</p>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </>
      ))}
      <input
        type="text"
        value={name ?? undefined}
        onChange={(e) => {
          setName(e.target.value ?? null);
        }}
      />
      <input
        type="text"
        value={email ?? undefined}
        onChange={(e) => {
          setEmail(e.target.value ?? null);
        }}
      />
      <button onClick={() => createUser()}>send</button>
    </div>
  );
}

export default App;
