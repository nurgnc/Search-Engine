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
import { BoldText } from "../styles/UserCard.styled";

function Home() {
  const { search, searchResult } = useContext(MainContext);

  return (
    <Container height="90vh">
      <Flex flexDirection="column" align="center" justify="center">
        <MarginVertical>
          <img src={logo} alt="logo" />
        </MarginVertical>
        <Flex width="80%" flexDirection="row" align="start" justify="center">
          <Flex
            width="100%"
            flexDirection="column"
            align="center"
            justify="flex-start"
          >
            <Input width="90%" />
            <ResultField active={search ? "active" : "none"}>
              {search &&
                searchResult
                  .slice(0, 3)
                  .map((item, index) => (
                    <UserCard
                      key={index}
                      name={item[0]}
                      email={item[2]}
                      date={item[3]}
                      country={item[4]}
                      city={item[5]}
                    />
                  ))}
              {search && searchResult.length === 0 && (
                <div>
                  <BoldText>No results...</BoldText>
                </div>
              )}
              {search && searchResult.length > 0 && (
                <ShowLinkContent>
                  <ShowLink to="/results">Show more...</ShowLink>
                </ShowLinkContent>
              )}
            </ResultField>
          </Flex>
          <Link to={search ? "/results" : ""}>
            <Button bgColor="#204080" />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Home;
