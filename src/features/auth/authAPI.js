// features/auth/authAPI.js

export const mockLogin = async ({ email, password }) => {
    // Mock user
    const mockUser = {
      id: 1,
      name: 'Moses Otieno',
      email: 'moses@tuinue.org',
      role: 'donor',
      token: 'mock-jwt-token',
    };
  
    if (email === mockUser.email && password === 'password') {
      return { data: mockUser };
    } else {
      throw new Error('Invalid credentials');
    }
  };
  
  export const mockRegister = async ({ name, email, password }) => {
    // Assume registration is always successful
    return {
      data: {
        id: Date.now(),
        name,
        email,
        role: 'donor',
        token: 'mock-jwt-token',
      },
    };
  };
  