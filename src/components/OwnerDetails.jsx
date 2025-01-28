import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOwnerById } from '../services/api';

function OwnerDetails() {
  const { id } = useParams();
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOwner = async () => {
      try {
        setLoading(true);
        const data = await fetchOwnerById(id);
        setOwner(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadOwner();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!owner) return <div>Owner not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Owner Details</h1>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="font-bold text-xl mb-2">{owner.firstName} {owner.lastName}</h2>
        <p className="text-gray-600">{owner.address}</p>
        <p className="text-gray-600">{owner.city}</p>
        <p className="text-gray-600">Tel: {owner.telephone}</p>
      </div>

      <h2 className="text-xl font-bold mb-4">Pets</h2>
      <div className="grid gap-4">
        {owner.pets.map((pet) => (
          <div key={pet.id} className="bg-white rounded shadow p-4">
            <h3 className="font-bold">{pet.name}</h3>
            <p className="text-gray-600">Type: {pet.type.name}</p>
            <p className="text-gray-600">Birth Date: {pet.birthDate}</p>

            {pet.visits.length > 0 && (
              <div className="mt-2">
                <h4 className="font-bold">Visits</h4>
                {pet.visits.map((visit) => (
                  <div key={visit.id} className="mt-1">
                    <p className="text-gray-600">{visit.date}: {visit.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OwnerDetails;
