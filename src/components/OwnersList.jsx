import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchOwners } from '../services/api';

function OwnersList() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchLastName, setSearchLastName] = useState('');

  const loadOwners = async () => {
    try {
      setLoading(true);
      const data = await fetchOwners(searchLastName);
      setOwners(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOwners();
  }, [searchLastName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pet Owners</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by last name"
          className="p-2 border rounded"
          value={searchLastName}
          onChange={(e) => setSearchLastName(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {owners.map((owner) => (
          <Link
            key={owner.id}
            to={`/owners/${owner.id}`}
            className="block p-4 bg-white rounded shadow hover:shadow-md"
          >
            <h2 className="font-bold">{owner.firstName} {owner.lastName}</h2>
            <p className="text-gray-600">{owner.address}</p>
            <p className="text-gray-600">{owner.city}</p>
            <p className="text-gray-600">Pets: {owner.pets.length}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OwnersList;
