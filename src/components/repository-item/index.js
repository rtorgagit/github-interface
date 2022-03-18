import React from "react";
import * as styled from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <styled.Wrapper>
      <styled.WrapperTitle>{name}</styled.WrapperTitle>
      <styled.WrapperFullName>full name:</styled.WrapperFullName>
      <styled.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </styled.WrapperLink>
    </styled.Wrapper>
  );
};

export default RepositoryItem;