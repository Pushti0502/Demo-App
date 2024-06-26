import create from 'zustand';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  clearUsers: () => void;
}

const useUserStore = create<UserState>((set) => ({
  users: [] as User[],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  clearUsers: () => set({ users: [] }),
}));

export default useUserStore;
