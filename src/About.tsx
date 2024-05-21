import React from 'react';
import useUserStore from './store';

const About: React.FC = () => {
  const { users } = useUserStore();
  const user = users.length > 0 ? users[users.length - 1] : null;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>About User</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default About;
