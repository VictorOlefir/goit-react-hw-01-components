import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image, Stats, StatsItem, Name } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <div>
        <Image src={avatar} alt="User avatar" width="150px" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <br />
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <br />
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <br />
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
