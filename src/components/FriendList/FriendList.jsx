import React from 'react';

import PropTypes from 'prop-types';
import { StyledList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

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

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
