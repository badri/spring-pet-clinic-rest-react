import { useState, useEffect } from 'react';
import { fetchVets } from '../services/api';

function VetsList() {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVets = async () => {
      try {
        setLoading(true);
        const data = await fetchVets();
        setVets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadVets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Veterinarians</h1>

      <div className="grid gap-4">
        {vets.map((vet) => (
          <div key={vet.id} className="bg-white rounded shadow p-4">
            <h2 className="font-bold">{vet.firstName} {vet.lastName}</h2>
            {vet.specialties.length > 0 && (
              <div className="mt-2">
                <h3 className="font-bold">Specialties:</h3>
                <div className="flex gap-2">
                  {vet.specialties.map((specialty) => (
                    <span
                      key={specialty.id}
                      className="bg-gray-100 px-2 py-1 rounded text-sm"
                    >
                      {specialty.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VetsList;
