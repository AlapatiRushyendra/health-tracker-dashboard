
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('john');
  const [data, setData] = useState([]);
  const [record, setRecord] = useState({ weight: '', bloodPressure: '', glucose: '' });

  const backendUrl = "https://health-tracker-backend.onrender.com"; // Use your actual backend URL

  const fetchRecords = async () => {
    const res = await axios.get(`${backendUrl}/api/records/${username}`);
    setData(res.data);
  };

  const submitRecord = async () => {
    await axios.post(`${backendUrl}/api/records`, {
      username,
      date: new Date().toISOString().split('T')[0],
      ...record,
    });
    setRecord({ weight: '', bloodPressure: '', glucose: '' });
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Health Tracker</h1>
      <input className="border p-2 mb-2 w-full" placeholder="Weight" value={record.weight}
        onChange={(e) => setRecord({ ...record, weight: e.target.value })} />
      <input className="border p-2 mb-2 w-full" placeholder="Blood Pressure" value={record.bloodPressure}
        onChange={(e) => setRecord({ ...record, bloodPressure: e.target.value })} />
      <input className="border p-2 mb-2 w-full" placeholder="Glucose" value={record.glucose}
        onChange={(e) => setRecord({ ...record, glucose: e.target.value })} />
      <button onClick={submitRecord} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      <h2 className="text-xl font-semibold mt-6">Past Records</h2>
      <ul className="mt-2">
        {data.map((rec) => (
          <li key={rec.id} className="border p-2 mb-1">
            {rec.date} - W: {rec.weight} BP: {rec.bloodPressure} Gl: {rec.glucose}
          </li>
        ))}
      </ul>
    </div>
  );
}
