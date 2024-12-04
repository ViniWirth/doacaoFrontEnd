import React, { useState } from "react";
import DoacaoForm from "./DoacaoForm";
import DoacaoList from "./DoacaoList";

const DoacaoPage = () => {
  const [editingDoacao, setEditingDoacao] = useState(null);

  const handleEdit = (doacao) => {
    setEditingDoacao(doacao);
  };

  const handleSave = () => {
    setEditingDoacao(null);
  };

  return (
    <div>
      <h1>Gerenciamento de Doações</h1>
      <DoacaoForm doacaoToEdit={editingDoacao} onSave={handleSave} />
      <hr />
      <DoacaoList onEdit={handleEdit} onDelete={handleSave} />
    </div>
  );
};

export default DoacaoPage;
