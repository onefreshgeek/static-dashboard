// src/App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import DashboardBody from './DashboardBody';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Space Grotesk', sans-serif; /* Set the font for the entire app */
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f8;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <TopBar />
        <DashboardBody/>
        {/* Content for the main dashboard or other pages will go here */}
      </MainContent>
    </AppContainer>
  );
}

export default App;
