import React, { useContext, useState } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// route
import { Link } from "react-router-dom";
// components
import { Button, Input, UserCard } from "../components";
// css
import { Container, Flex, MarginVertical } from "../styles/baseStyles";
import {
  ResultField,
  ShowLink,
  ShowLinkContent,
} from "../styles/Results.styled";
// logo img
import logo from "../assets/logo.png";

function Home() {
  const { search, searchResult } = useContext(MainContext);

  return (
    <Container>
      <Flex flexDirection="column" align="center" justify="center">
        <MarginVertical>
          <img src={logo} alt="logo" />
        </MarginVertical>
        <Flex
          width="70%"
          flexDirection="row"
          align="center"
          justify="space-evenly"
        >
          <Input width="80%" />
          <Link to={search ? "/results" : ""}>
            <Button bgColor="#204080" />
          </Link>
        </Flex>
        <ResultField active={search ? "active" : "none"}>
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
          {search && (
            <ShowLinkContent>
              <ShowLink to="/results">Show more...</ShowLink>
            </ShowLinkContent>
          )}
        </ResultField>
      </Flex>
    </Container>
  );
}

export default Home;
