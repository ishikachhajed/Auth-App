import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {user?.name}! Here's an overview of your account.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl text-indigo-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Profile Management</h3>
            <p className="mt-2 text-sm text-gray-500">
              Update your personal information, contact details, and bio to keep your profile current.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/profile" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
              Go to Profile <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl text-green-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
            <p className="mt-2 text-sm text-gray-500">
              Change your password and manage account security preferences.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/settings" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
              Manage Security <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Card 3 — Security Status */}
        <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl text-purple-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-medium text-gray-900">
              Security Status
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Your account is protected with JWT authentication and encrypted credentials.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Secure Session Active
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Password Encrypted
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                JWT Authentication Enabled
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block"></span>
              System Secure
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
