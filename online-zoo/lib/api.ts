const API_URL = process.env.API_URL;

export async function getPets() {
  const data = await fetch(`${API_URL}/pets`);
  if (!data.ok) {
    return [];
  }
  return data.json();
}

export const getFeedbacks = async () => {
  const data = await fetch(`${API_URL}/feedback`);
  if (!data.ok) {
    return [];
  }
  return data.json();
};
