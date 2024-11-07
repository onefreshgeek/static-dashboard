
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaCalendarAlt, FaEnvelope, FaUsers, FaGift, FaClipboardList, FaChartPie, FaCog } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarBg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  font-family: 'Space Grotesk', sans-serif;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  margin: 1.5rem 0 0.5rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? props.theme.primary : props.theme.text)};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
    color: ${(props) => (props.active ? props.theme.primary : '#888')};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin-top: auto;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const ToggleIcon = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
`;

export default function Sidebar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SidebarContainer>
      <Logo>Justgifts.Ng</Logo>
      
      {/* Main Section */}
      <NavList>
        <NavItem active>
          <FaHome />
          Dashboard
        </NavItem>
        <NavItem>
          <FaCalendarAlt />
          Task Calendar
        </NavItem>
        <NavItem>
          <FaEnvelope />
          Messages
        </NavItem>
        <NavItem>
          <FaCog />
          Settings
        </NavItem>
      </NavList>

      {/* My Pages Section */}
      <SectionTitle>MY PAGES</SectionTitle>
      <NavList>
        <NavItem>
          <FaUsers />
          Client Management
        </NavItem>
        <NavItem>
          <FaGift />
          Gift Inventory
        </NavItem>
        <NavItem>
          <FaClipboardList />
          Order & Tracking
        </NavItem>
        <NavItem>
          <FaChartPie />
          Analytics
        </NavItem>
        <NavItem>
          <AiOutlinePlus />
          Create New Page
        </NavItem>
      </NavList>

      {/* Light/Dark Mode Toggle */}
      <ToggleContainer onClick={toggleTheme}>
        <ToggleIcon>{isDarkMode ? <FiSun /> : <FiMoon />}</ToggleIcon>
        <span style={{ marginLeft: '8px', fontWeight: '500', color: '#6c63ff' }}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </ToggleContainer>
    </SidebarContainer>
  );
}
