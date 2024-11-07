
import React from 'react';
import styled, { keyframes } from 'styled-components';
import TaskCard from './TaskCard';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ColumnContainer = styled.div`
  flex: 1;
  background-color: #f7f7f8;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddTaskButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #574bdb;
    transform: rotate(90deg) scale(1.1); /* Rotate and scale on hover */
  }
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function TaskColumn({ title }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        {title}
        <AddTaskButton>+</AddTaskButton>
      </ColumnTitle>
      <TaskList>
        {/* Example TaskCards */}
        <TaskCard title="Pay Salaries" priority="High Priority" progress="88%" />
        <TaskCard title="Inventory" priority="Low Priority" progress="92%" />
        <TaskCard title="Shipping Packages" priority="High Priority" progress="0%" />
        {/* Additional TaskCards can be added here */}
      </TaskList>
    </ColumnContainer>
  );
}
