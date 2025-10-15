// models/user.model.ts
export interface User {
  id: number;
  username: string;
  password: string;
}

let users: User[] = [
  { id: 1, username: "John Doe", password: "123456" },
  { id: 2, username: "Jane Doe", password: "abcdef" },
];

// Simulate database model functions
export const UserModel = {
  findAll: (): User[] => {
    return users;
  },

  findByUsername: (username: string): User | undefined => {
    return users.find((user) => user.username === username);
  },

  findById: (id: number): User | undefined => {
    return users.find((user) => user.id === id);
  },

  create: (newUser: Omit<User, "id">): User => {
    const user: User = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      ...newUser,
    };
    users.push(user);
    return user;
  },

  updatePassword: (id: number, newPassword: string): User | undefined => {
    const user = users.find((u) => u.id === id);
    if (user) {
      user.password = newPassword;
      return user;
    }
    return undefined;
  },

  delete: (id: number): boolean => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  },
};
