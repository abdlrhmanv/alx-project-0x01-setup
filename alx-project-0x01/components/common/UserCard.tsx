import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 space-y-2 border hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-700">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-800">{user.email}</p>
      <p className="text-sm text-gray-600">
        {user.address.city}, {user.address.street}, {user.address.suite}
      </p>
      <p className="text-sm text-gray-600">📞 {user.phone}</p>
      <p className="text-sm text-gray-600">🌐 {user.website}</p>
      <p className="text-sm italic text-gray-500">🏢 {user.company.name}</p>
    </div>
  );
};

export default UserCard;
