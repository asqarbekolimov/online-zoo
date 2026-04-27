const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export const getAnimalById = async (id: number) => {
  const response = await fetch(`${API_URL}/pets/${id}`);
  if (!response.ok) {
    console.error('Failed to fetch animal by ID', response.status);
    return undefined;
  }
  const json = await response.json();
  return json.data;
};
