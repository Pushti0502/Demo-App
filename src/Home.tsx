import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchUsers } from './api';
import { User } from './store';

const Home: React.FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return fetchUsers();
        },
        
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading users.</div>;
    }

    const userList = data as User[];
    console.log(userList,'userList')

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {userList.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
