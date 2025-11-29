import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Card } from '../../components/common/Card';

export function AccountDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [pets, setPets] = useState<any[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);
  const [recentOrders, setRecentOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadData();
  }, [user]);

  const loadData = async () => {
    if (!user?.id) return;

    const [userRes, petsRes, appointmentsRes, ordersRes] = await Promise.all([
      supabase.from('users').select('*').eq('user_id', user.id).maybeSingle(),
      supabase.from('pets').select('*').eq('user_id', user.id),
      supabase
        .from('appointments')
        .select('*, clinics(*), doctors(*)')
        .eq('user_id', user.id)
        .gte('appointment_date', new Date().toISOString().split('T')[0])
        .order('appointment_date')
        .limit(3),
      supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(3),
    ]);

    if (userRes.data) setUserData(userRes.data);
    if (petsRes.data) setPets(petsRes.data);
    if (appointmentsRes.data) setUpcomingAppointments(appointmentsRes.data);
    if (ordersRes.data) setRecentOrders(ordersRes.data);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-8">
        <div className="section-container">
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="mt-2">Welcome back, {userData?.name || 'Pet Parent'}!</p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <nav className="space-y-2">
                <Link
                  to="/account"
                  className="block px-4 py-2 rounded hover:bg-gray-100 font-medium text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  to="/account/pets"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                >
                  My Pets
                </Link>
                <Link
                  to="/account/appointments"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                >
                  Appointments
                </Link>
                <Link
                  to="/account/orders"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                >
                  Orders
                </Link>
                <Link
                  to="/account/settings"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-red-600"
                >
                  Sign Out
                </button>
              </nav>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="text-3xl mb-2">🐾</div>
                <div className="text-3xl font-bold text-primary">{pets.length}</div>
                <p className="text-text-secondary">My Pets</p>
              </Card>
              <Card>
                <div className="text-3xl mb-2">📅</div>
                <div className="text-3xl font-bold text-primary">{upcomingAppointments.length}</div>
                <p className="text-text-secondary">Upcoming Appointments</p>
              </Card>
              <Card>
                <div className="text-3xl mb-2">📦</div>
                <div className="text-3xl font-bold text-primary">{recentOrders.length}</div>
                <p className="text-text-secondary">Recent Orders</p>
              </Card>
            </div>

            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">My Pets</h2>
              </div>
              {pets.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-text-secondary">No pets added yet</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {pets.slice(0, 4).map((pet) => (
                    <div key={pet.pet_id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl text-white mr-4">
                        {pet.type === 'dog' ? '🐕' : '🐈'}
                      </div>
                      <div>
                        <p className="font-semibold">{pet.name}</p>
                        <p className="text-sm text-text-secondary">
                          {pet.breed} • {pet.age} years
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Upcoming Appointments</h2>
              </div>
              {upcomingAppointments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-text-secondary">No upcoming appointments</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.appointment_id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{apt.service_type}</p>
                          <p className="text-sm text-text-secondary">
                            {apt.clinics?.name} • Dr. {apt.doctors?.name}
                          </p>
                          <p className="text-sm text-text-light mt-1">
                            {new Date(apt.appointment_date).toLocaleDateString()} at {apt.appointment_time}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          {apt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Orders</h2>
              </div>
              {recentOrders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-text-secondary">No orders yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.order_id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">Order #{order.order_id.slice(0, 8)}</p>
                          <p className="text-sm text-text-secondary">₹{order.total_amount}</p>
                          <p className="text-sm text-text-light mt-1">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {order.order_status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
