import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 space-y-2 border hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-800">{email}</p>
      <p className="text-sm text-gray-600">
        {address.city}, {address.street}, {address.suite}
      </p>
      <p className="text-sm text-gray-600">📞 {phone}</p>
      <p className="text-sm text-gray-600">🌐 {website}</p>
      <p className="text-sm italic text-gray-500">🏢 {company.name}</p>
    </div>
  );
};

export default UserCard;
