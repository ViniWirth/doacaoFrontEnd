import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import DoacaoPage from "./DoacaoPage";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <UserForm userToEdit={editingUser} onSave={handleSaveUser} />
      <UserList onEdit={handleEditUser} />
      
      <hr />

      <DoacaoPage /> {}
    </div>
  );
};

export default App;
