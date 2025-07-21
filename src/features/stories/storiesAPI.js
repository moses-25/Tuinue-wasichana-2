// Example API functions for stories

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function fetchStories() {
  const res = await fetch(`${API_URL}/stories`);
  if (!res.ok) throw new Error("Failed to fetch stories");
  return res.json();
}

export async function fetchStoryDetails(id) {
  const res = await fetch(`${API_URL}/stories/${id}`);
  if (!res.ok) throw new Error("Failed to fetch story details");
  return res.json();
}