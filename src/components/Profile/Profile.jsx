import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  Information,
  BoxStats,
  ListStats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Information>@{tag}</Information>
        <Information>@{location}</Information>
      </Description>

      <BoxStats>
        <ListStats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListStats>
        <ListStats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListStats>
        <ListStats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListStats>
      </BoxStats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


