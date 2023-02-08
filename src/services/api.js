// Simulated API service
export const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Yazan', role: 'Software Engineer' });
    }, 1000);
  });
};
// Updated API service with error simulation
export const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve({ name: 'Yazan', role: 'Software Engineer' });
      } else {
        reject(new Error('Failed to fetch user data'));
      }
    }, 1000);
  });
};
