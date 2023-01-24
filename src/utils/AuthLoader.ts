export const AuthLoader = async () => {
  const res = await fetch("/src/ressources/mocks/UsersMock.json");
  const resp = await res.json();
  console.log(resp);

  return resp;
};
