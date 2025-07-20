import React, { useState } from 'react';
import { UserData } from '@/interfaces';

const initialUser: UserData = {
  id: Date.now(),
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const UserModal: React.FC<{ isOpen: boolean, onClose: () => void, onSave: (user: UserData) => void }> = ({ isOpen, onClose, onSave }) => {
  const [user, setUser] = useState<UserData>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave({ ...user, id: Date.now() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-md p-6 space-y-4 w-96">
        <h2 className="text-xl font-semibold">Add New User</h2>
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" className="border p-2 w-full" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="website" placeholder="Website" className="border p-2 w-full" onChange={handleChange} />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
