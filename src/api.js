import useUserStore from './store';

let users = [];

export const fetchUsers = async () => {
 
  const storedUsers = useUserStore.getState().users;
  
  users = storedUsers;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500); 
  });
};

export const addUser = async (user) => {
  useUserStore.getState().addUser(user);
  return new Promise((resolve) => {
    setTimeout(() => {
      users.push(user);
      resolve(user);
    }, 500); 
  });
};
