// Example service function
interface User {
  id: number;
  name: string;
}

const getUserData = (): User => {
  return { id: 1, name: "John Doe" };
};

export default {
  getUserData,
};
