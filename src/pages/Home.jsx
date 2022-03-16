import React, { useContext, useState } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// route
import { Link } from "react-router-dom";
// components
import { Button, Input, UserCard } from "../components";
// logo img
import logo from "../assets/logo.png";

function Home() {
  const { search, searchResult } = useContext(MainContext);

  const showMore = () => {
    return <Link to="/results">Show more...</Link>;
  };

  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Input />
        <Link to={search ? "/results" : ""}>
          <Button />
        </Link>
      </div>
      <div>
        {search &&
          searchResult
            .slice(0, 3)
            .map((item) => (
              <UserCard
                name={item[0]}
                email={item[2]}
                date={item[3]}
                country={item[4]}
                city={item[5]}
              />
            ))}
      </div>
      {search && <Link to="/results">Show more...</Link>}
    </div>
  );
}

export default Home;
