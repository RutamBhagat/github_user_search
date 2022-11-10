import React, { useState, useEffect } from "react";
import Search from "./Component/Search/Search.component.jsx";
import Table from "./Component/Table/Table.component.jsx";
import Users from "./data.json";
import "regenerator-runtime/runtime";

const App = () => {
  const [userArr, setUserArr] = useState([]);
  const [username, setUsername] = useState("");
  const [contributionYear, setContributionYear] = useState([2008, 2022]);

  useEffect(() => {
    Users.map((user) => {
      const id = user.github.replace("https://github.com/", "");
      let followers = 0;
      let repoCount = 0;
      let userContributions = { 2022: 0 };
      getFollowersAndRepoCount(id).then((data) => {
        console.log(data);
        followers = data[0];
        repoCount = data[1];
        // const userContributions = await getContributions(id, contributions);
        const tempObj = {
          ...user,
          id,
          followers,
          repoCount,
        };
        // userContributions: userContributions,
        console.log("tempObj from UserArr in App");
        console.log(tempObj);
        userArr.push(tempObj);
        setUserArr([...userArr]);
      });
    });
  }, []);

  const handleUsername = (data) => {
    setUsername(data);
  };

  const handleContributions = (data) => {
    const yearStrArr = data.split("-");
    const yearArr = [
      Number.parseInt(yearStrArr[0]),
      Number.parseInt(yearStrArr[1]),
    ];
    setContributionYear(yearArr);
  };

  const changeTable = (event) => {
    if (event.key === "Enter") {
      const usernameStr = username.split(" ").join("");
      console.log(usernameStr);
      console.log(contributions);

      fetch(`https://api.github.com/users/${usernameStr}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  };

  const changeTableClick = () => {
    const usernameStr = username.split(" ").join("");
    console.log(usernameStr);
    console.log(contributionYear);

    fetch(`https://api.github.com/users/${usernameStr}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const getFollowersAndRepoCount = async (id) => {
    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();
    if (data.followers && data.public_repos) {
      const followersAndRepoCountArr = [data.followers, data.public_repos];
      return followersAndRepoCountArr;
    } else {
      return [-1, -1];
    }
  };

  const getContributions = async (id, contributions) => {
    let totalContributionsObj = {};
    for (let year = 2008; year <= 2022; year++) {
      let sum = 0;
      const response = await fetch(
        `https://skyline.github.com/${id}/${year}.json`
      );
      const data = await response.json();
      if (data.min != null && 0 < data.min) {
        for (let week of data.contributions) {
          for (let day of week.days) {
            sum += day.count;
          }
        }
      }
      totalContributionsObj[`${year}`] = sum;
    }
    return totalContributionsObj;
  };

  return (
    <div className="container mx-auto px-12">
      <Search
        changeTable={changeTable}
        changeTableClick={changeTableClick}
        handleUsername={handleUsername}
        handleContributions={handleContributions}
      />
      <Table userArr={userArr} contributionYear={contributionYear} />
    </div>
  );
};

export default App;
