import React, { useState } from "react";
import api from "./api";

const UserForm = ({ userToEdit, onSave }) => {
  const [user, setUser] = useState(userToEdit || { nome: "", senha: "", saldo: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await api.post("user/editar", user);
    } else {
      await api.post("user/cadastrar", user);
    }
    onSave();
    setUser({ nome: "", senha: "", saldo: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user.id ? "Editar Usuário" : "Cadastrar Usuário"}</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={user.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={user.senha}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Saldo:</label>
        <input
          type="number"
          name="saldo"
          value={user.saldo}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{user.id ? "Atualizar" : "Cadastrar"}</button>
    </form>
  );
};

export default UserForm;
