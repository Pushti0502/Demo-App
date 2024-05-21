import React from 'react';
import useUserStore from './store';

const Home: React.FC = () => {
  const { users } = useUserStore();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Home</h1>
      {users.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default Home;
