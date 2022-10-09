import { StyledItem, IsOnlineColor } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      <IsOnlineColor isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p style={{ marginLeft: '5px' }}>{name}</p>
    </StyledItem>
  );
};
