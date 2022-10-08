import React from 'react';

import PropTypes from 'prop-types';
import { StyledItem, IsOnlineColor, StyledList } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        );
      })}
    </StyledList>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      <IsOnlineColor isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p style={{ marginLeft: '5px' }}>{name}</p>
    </StyledItem>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
