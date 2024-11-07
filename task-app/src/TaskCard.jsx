
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEllipsisV } from 'react-icons/fa';

// Scale-up effect on hover
const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TaskTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const PriorityLabel = styled.span`
  font-size: 0.8rem;
  color: ${(props) =>
    props.priority === 'High Priority' ? '#ff4d4d' :
    props.priority === 'Medium Priority' ? '#ffa500' :
    '#4caf50'};
  font-weight: 500;
  margin-top: 5px;
  transition: color 0.3s ease;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProgressText = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: ${(props) => props.progress};
    background-color: #6c63ff;
    transition: width 0.5s ease;
  }
`;

const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const DueDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const Assignees = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: -8px;
    border: 2px solid #fff;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function TaskCard({ title, priority, progress }) {
  return (
    <CardContainer>
      <TaskTitle>{title}</TaskTitle>
      <PriorityLabel priority={priority}>{priority}</PriorityLabel>
      <ProgressContainer>
        <ProgressText>Task done: {progress}</ProgressText>
        <ProgressBar progress={progress} />
      </ProgressContainer>
      <TaskFooter>
        <DueDate>4th Oct, 2024</DueDate>
        <Assignees>
          <img src="https://via.placeholder.com/40" alt="Assignee 1" />
          <img src="https://via.placeholder.com/40" alt="Assignee 2" />
          <img src="https://via.placeholder.com/40" alt="Assignee 3" />
        </Assignees>
      </TaskFooter>
    </CardContainer>
  );
}
