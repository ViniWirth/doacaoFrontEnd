import React, { useState, useEffect } from "react";
import api from "./api";

const DoacaoForm = ({ doacaoToEdit, onSave }) => {
  const [doacao, setDoacao] = useState({ nome: "", descricao: "", meta: 0, valorArrecadado: 0 });

  useEffect(() => {
    if (doacaoToEdit) {
      setDoacao(doacaoToEdit);
    }
  }, [doacaoToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoacao({ ...doacao, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (doacao.id) {
      await api.post("/doacao/editar", doacao);
    } else {
      await api.post("/doacao/cadastrar", doacao);
    }
    onSave();
    setDoacao({ nome: "", descricao: "", meta: 0, valorArrecadado: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{doacao.id ? "Editar Doação" : "Cadastrar Doação"}</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={doacao.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          name="descricao"
          value={doacao.descricao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Meta:</label>
        <input
          type="number"
          name="meta"
          value={doacao.meta}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Valor Arrecadado:</label>
        <input
          type="number"
          name="valorArrecadado"
          value={doacao.valorArrecadado}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{doacao.id ? "Atualizar" : "Cadastrar"}</button>
    </form>
  );
};

export default DoacaoForm;
