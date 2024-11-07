
import React from 'react';
import styled, { keyframes } from 'styled-components';
import TaskColumn from './TaskColumn';

// Slide-in and fade-in animation for the header
const fadeInSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade and stagger animation for columns
const staggerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the whole dashboard
const DashboardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  height: 100%;
  animation: ${fadeInSlideDown} 0.5s ease-out;
`;

// Header container with animation
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeInSlideDown} 0.7s ease forwards;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 5px;
`;

// Dropdown with smooth transitions and hover effect
const DropdownContainer = styled.div`
  position: relative;
`;

const Dropdown = styled.select`
  padding: 8px 12px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
  background-color: #f7f7f8;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.primary};
    background-color: #ffffff;
  }
`;

// Columns container with staggered animation
const ColumnsContainer = styled.div`
  display: flex;
  gap: 20px;
  animation: ${staggerFadeIn} 0.7s ease forwards;
  animation-delay: 0.3s; /* Delay for staggered effect */
`;

export default function DashboardBody() {
  return (
    <DashboardBodyContainer>
      {/* Header Section */}
      <HeaderContainer>
        <div>
          <Title>Task Calendar</Title>
          <Subtitle>Track your tasks and deadlines below</Subtitle>
        </div>
        <DropdownContainer>
          <Dropdown>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </Dropdown>
        </DropdownContainer>
      </HeaderContainer>

      {/* Columns with Task Cards */}
      <ColumnsContainer>
        <TaskColumn title="In-Progress Tasks" />
        <TaskColumn title="To-Do Tasks" />
        <TaskColumn title="Completed Tasks" />
      </ColumnsContainer>
    </DashboardBodyContainer>
  );
}
