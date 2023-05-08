import React, { useState } from "react";

let inputs = {
  checkBox: [
    {
      id: 1,
      nome: "vacina"
    },
    {
      id: 2,
      nome: "tecnico veterinario"
    },
    {
      id: 3,
      nome: "cuidado animal"
    },
    {
      id: 4,
      nome: "anestesia"
    }
  ]
};

let inputsVet = {
  checkBox: [
    {
      id: 1,
      nome: "vacina"
    }
  ]
};

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleInputChange = (event) => {
    const { id } = event.target;
    const index = checkedBoxes.findIndex((item) => item.id === parseInt(id));

    if (event.target.checked) {
      if (index === -1) {
        setCheckedBoxes([...checkedBoxes, { id: parseInt(id) }]);
      }
    } else {
      if (index !== -1) {
        setCheckedBoxes(
          checkedBoxes.filter((item) => item.id !== parseInt(id))
        );
      }
    }
  };

  return (
    <div>
      {inputs.checkBox.map((item) => {
        const isChecked = inputsVet.checkBox.findIndex(vetItem => vetItem.id === item.id) !== -1;
        return (
          <label key={item.id}>
            <input
              checked={isChecked}
              type="checkbox"
              id={item.id}
              onChange={handleInputChange}
            />
            {item.nome}
          </label>
        );
      })}
    </div>
  );
}

export default App;
