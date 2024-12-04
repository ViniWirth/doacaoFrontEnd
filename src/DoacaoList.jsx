import React, { useState, useEffect } from "react";
import api from "./api";

const DoacaoList = ({ onEdit }) => {
  const [doacoes, setDoacoes] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:8080/doacao/listar")
      .then((response) => {
        setDoacoes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar doações:", error);
      });
  }, []);

  const handleEditClick = (doacao) => {
    onEdit(doacao);
  };

  const handleDeleteClick = async (id) => {
    try {
      await api.delete(`http://localhost:8080/doacao/deletar/${id}`);
      setDoacoes(doacoes.filter((doacao) => doacao.id !== id));
    } catch (error) {
      console.error("Erro ao deletar a doação:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Doações</h2>
      <ul>
        {doacoes.map((doacao) => (
          <li key={doacao.id}>
            <strong>{doacao.nome}</strong> - Meta: {doacao.meta} - Arrecadado: {doacao.valorArrecadado}
            <br />
            <em>{doacao.descricao}</em> {}
            <div>
              <button onClick={() => handleEditClick(doacao)}>Editar</button>
              <button onClick={() => handleDeleteClick(doacao.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoacaoList;
