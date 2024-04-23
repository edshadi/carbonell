// src/App.tsx
import React from 'react';
import Chat from './components/Chat';
import Layout from './components/Layout';
import Bar from './components/Menu';
import Plus from './components/Plus';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Bar />
      </header>
      <main>
        <Layout>
          <Chat />
        </Layout>
        <Plus />
      </main>
    </div>
  );
};

export default App;
