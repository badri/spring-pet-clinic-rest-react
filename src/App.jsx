import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwnersList from './components/OwnersList';
import OwnerDetails from './components/OwnerDetails';
import AddOwner from './components/AddOwner';
import VetsList from './components/VetsList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <span className="font-semibold text-gray-500 text-lg">Pet Clinic</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link to="/" className="py-4 px-2 text-gray-500 hover:text-green-500">Owners</Link>
                  <Link to="/vets" className="py-4 px-2 text-gray-500 hover:text-green-500">Vets</Link>
                  <Link to="/add-owner" className="py-4 px-2 text-gray-500 hover:text-green-500">Add Owner</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<OwnersList />} />
            <Route path="/owners/:id" element={<OwnerDetails />} />
            <Route path="/add-owner" element={<AddOwner />} />
            <Route path="/vets" element={<VetsList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
