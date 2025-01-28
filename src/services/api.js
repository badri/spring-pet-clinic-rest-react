const API_BASE_URL = window.REACT_APP_API_BASE_URL || 'http://localhost:9966/petclinic/api';

export const fetchOwners = async (lastName = '') => {
  const response = await fetch(`${API_BASE_URL}/owners${lastName ? `?lastName=${lastName}` : ''}`);
  if (!response.ok) throw new Error('Failed to fetch owners');
  return response.json();
};

export const fetchOwnerById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/owners/${id}`);
  if (!response.ok) throw new Error('Failed to fetch owner');
  return response.json();
};

export const createOwner = async (ownerData) => {
  const response = await fetch(`${API_BASE_URL}/owners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ownerData),
  });
  if (!response.ok) throw new Error('Failed to create owner');
  return response.json();
};

export const fetchVets = async () => {
  const response = await fetch(`${API_BASE_URL}/vets`);
  if (!response.ok) throw new Error('Failed to fetch vets');
  return response.json();
};
