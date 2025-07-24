const mockStories = [
    {
      id: '1',
      title: 'Amina’s Journey to Education',
      image: '/assets/images/amina.jpg',
      content:
        'Amina walked 6km daily to attend school in rural Kenya. Today, she is a scholarship recipient studying to become a teacher...',
      author: 'Amina O.',
    },
    {
      id: '2',
      title: 'From Struggles to Scholarships',
      image: 'Image 3.jpg',
      content:
        'Many girls drop out due to lack of support. But programs like Tuinue Wasichana are reversing this trend...',
      author: 'Faith L.',
    },
  ];
  
  export const getAllStoriesAPI = async () => {
    return { data: mockStories };
  };
  
  export const getStoryByIdAPI = async (id) => {
    const story = mockStories.find((s) => s.id === id);
    if (!story) throw new Error('Story not found');
    return { data: story };
  };
  