import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function PollOption({ label, count, onVote }) {
  return (
    <div className="poll-option" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ color: '#333' }}>{label}</h3>
      <p style={{ fontSize: '16px', color: '#666' }}>Votes: {count}</p>
      <button onClick={onVote} style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Vote</button>
    </div>
  );
}

function App() {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].count += 1;
    setOptions(updatedOptions);
  };

  const getLeader = () => {
    const leader = options.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    });
    return leader;
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '100px', margin: '0 10px' }} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '100px', margin: '0 10px' }} />
        </a>
      </div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Vote for your favorite pet!</h1>
      {options.map((option, index) => (
        <PollOption
          key={index}
          label={option.option}
          count={option.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <div className="leader" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ color: '#007bff' }}>Current Leader: {getLeader().option}</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>Votes: {getLeader().count}</p>
      </div>
    </>
  );
}

export default App;
