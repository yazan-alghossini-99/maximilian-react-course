// Simulated API service
export const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Yazan', role: 'Software Engineer' });
    }, 1000);
  });
};
