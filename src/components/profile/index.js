import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as styled from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <styled.Wrapper>
      <styled.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <styled.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <styled.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </styled.WrapperUserGeneric>
          <styled.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </styled.WrapperUserGeneric>
          <styled.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </styled.WrapperUserGeneric>
          <styled.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </styled.WrapperUserGeneric>
        </div>
        <styled.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </styled.WrapperStatusCount>
      </styled.WrapperInfoUser>
    </styled.Wrapper>
  );
};

export default Profile;