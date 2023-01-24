import axios from "axios";
import { useTransition } from "react";
import { useNavigation } from "react-router-dom";

type User = {
  id: number;
  uid: string;
  password: string;
  status: string;
  first_name: string;
  last_name: string;
};

export const Auth = async () => {
  const users: User[] = await (
    await axios.get("src/ressources/mocks/UsersMock.json")
  ).data;
  console.log(users.find((user) => user.id === 9891));
  // recherche user via id
  // verif login mdp
  // si ok redirect page selon status
  // depuis home ? voir avec actionLoader et UseLoaderData au click sur connect
  // voir useNavigation pour status de chargement
  /*   const toto = useNavigation()
  if(toto.state === "idle") */

  return users;
};
