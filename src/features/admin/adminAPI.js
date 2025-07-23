let mockPendingCharities = [
    {
      id: 'charity-1',
      name: 'Girls for Change',
      description: 'Focused on menstrual health education and school supplies.',
    },
    {
      id: 'charity-2',
      name: 'Educate Her',
      description: 'Provides scholarships to vulnerable girls in rural Kenya.',
    },
  ];
  
  export const getAdminStatsAPI = async () => {
    return {
      data: {
        totalDonors: 124,
        totalAmount: 843000,
        pendingCharities: mockPendingCharities.length,
      },
    };
  };
  
  export const getPendingCharitiesAPI = async () => {
    return { data: mockPendingCharities };
  };
  
  export const approveCharityAPI = async (id) => {
    mockPendingCharities = mockPendingCharities.filter((c) => c.id !== id);
    return { data: { success: true } };
  };
  
  export const rejectCharityAPI = async (id) => {
    mockPendingCharities = mockPendingCharities.filter((c) => c.id !== id);
    return { data: { success: true } };
  };
  