import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/listar")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  }, []);

  const handleEditClick = (user) => {
    onEdit(user); 
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/deletar/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o usuário:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.saldo}
            <button onClick={() => handleEditClick(user)}>Editar</button>
            <button onClick={() => handleDeleteClick(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
