// Simulated data for demo purposes
let mockCharities = [
    {
      id: '1',
      name: 'Girls for Education',
      description: 'Helping girls access quality education in rural areas.',
      image: '/assets/images/charity1.jpg',
    },
    {
      id: '2',
      name: 'Pads for Progress',
      description: 'Providing menstrual hygiene kits to schoolgirls.',
      image: '/assets/images/charity2.jpg',
    },
    {
      id: '3',
      name: 'Safe Spaces Initiative',
      description: 'Creating safe environments for girls in schools.',
      image: '/assets/images/charity3.jpg',
    },
  ];
  
  // Simulate async fetch of all charities
  export const getAllCharities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCharities);
      }, 500);
    });
  };
  
  // Simulate fetch charity by ID
  export const getCharityById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const charity = mockCharities.find((c) => c.id === id);
        if (charity) {
          resolve(charity);
        } else {
          reject(new Error('Charity not found'));
        }
      }, 500);
    });
  };
  
  // Simulate submitting a new charity application
  export const applyAsCharity = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newCharity = {
          ...data,
          id: (mockCharities.length + 1).toString(),
          image: 'default.jpg',
        };
        mockCharities.push(newCharity);
        resolve({ message: 'Application submitted' });
      }, 1000);
    });
  };
  