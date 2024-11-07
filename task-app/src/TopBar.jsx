
import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiBell } from 'react-icons/fi';

const TopBarContainer = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.text};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7f8;
  border-radius: 20px;
  padding: 8px 12px;
  width: 300px;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 1.2rem;
  color: #888;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  width: 100%;

  &::placeholder {
    color: #888;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NotificationIcon = styled(FiBell)`
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserName = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const UserImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      {/* Search Bar */}
      <SearchContainer>
        <SearchIcon />
        <SearchInput type="text" placeholder="Search" />
      </SearchContainer>

      {/* User and Notification Section */}
      <ProfileContainer>
        <NotificationIcon />
        <UserProfile>
          <UserName>
            Precious Erin
            <div style={{ fontSize: '0.8rem', color: '#888' }}>CEO, Justgifts.Ng</div>
          </UserName>
          <UserImage src="https://via.placeholder.com/35" alt="Profile" />
        </UserProfile>
      </ProfileContainer>
    </TopBarContainer>
  );
}
