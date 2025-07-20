import React, { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

const initialUser: UserProps = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit({ ...user, id: Date.now() }); // id وهمي
    onClose();
  };

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
