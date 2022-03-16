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
  const { search, userData } = useContext(MainContext);

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
          userData.map((data) =>
            [data[0], data[2], data[4]]
              .filter(
                (searchItem) =>
                  searchItem.toLowerCase().includes(search) && [...data]
              )
              .map((item, index) => (
                <UserCard
                  name={data[0]}
                  email={data[2]}
                  date={data[3]}
                  country={data[4]}
                  city={data[5]}
                />
              ))
          )}
      </div>
    </div>
  );
}

export default Home;
