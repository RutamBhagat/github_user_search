import { createContext, useState, useEffect } from "react";
import Users from "../data.json";

export const UserContext = createContext({
  users: null,
});

const fetchGithubUser = async (id) => {
  const response = await fetch(`https://api.github.com/users/${id}`);
  const data = await response.json();
  return data;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const acc = [];
      for (let user of Users) {
        const id = user.github.replace("https://github.com/", "");
        let contributions = 0;
        const { public_repos, followers } = await fetchGithubUser(id);
        acc.push({
          id: id,
          contributions: contributions,
          followers: followers,
          repoCount: public_repos,
          name: user.name,
          github: user.github,
          fieldA: user.fieldA,
          fieldB: user.fieldB,
          fieldN: user.fieldN,
        });
      }
      setUsers(acc);
    };

    getData();
  }, []);

  const value = { users };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
