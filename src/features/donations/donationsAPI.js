// features/donations/donationsAPI.js

// Mock API functions
export const submitDonationAPI = async (data) => {
    console.log("Mock submitting donation:", data);
    return {
      data: {
        message: 'Donation successful',
        donation: { ...data, id: Date.now(), date: new Date().toISOString() },
      },
    };
  };
  
  export const fetchDonationHistoryAPI = async () => {
    return {
      data: [
        {
          id: 1,
          charityName: 'Educate Girls Foundation',
          amount: 1500,
          frequency: 'Monthly',
          date: '2025-07-01',
        },
        {
          id: 2,
          charityName: 'Hope for Her',
          amount: 1000,
          frequency: 'One-Time',
          date: '2025-06-15',
        },
      ],
    };
  };
  