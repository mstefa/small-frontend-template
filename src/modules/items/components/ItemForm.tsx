import React, { useState } from 'react';

export default function ItemForm() {
  const [input, setInput] = useState({
    title: '',
    price: '',
    category: '',
  });

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChangeOptions = (e: EventListenerOptions) => {
  //   let value = Array.from(e.target.selectedOptions, (option) => {
  //     return { id: option.id, name: option.value };
  //   });
  //   setInput({
  //     ...input,
  //     category: value,
  //   });
  // };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.title && input.title.length > 0) {
      console.error(input);
    } else {
      window.alert('Revisa los datos');
    }
  };

  const category = [
    {
      id: '1',
      name: 'type1',
    },
    {
      id: '2',
      name: 'type2',
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <strong>Cual es el nombre de tu Producto?</strong>
          </p>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={input.title}
          ></input>
          <p>
            <strong>Tienes una imagen de él?</strong>
          </p>
          <input
            type="number"
            name="price"
            onChange={handleInputChange}
            value={input.price}
          ></input>
        </div>
        <div>
          <label form="type">
            <strong>Que Categoria? </strong>
          </label>
          {/* <select
            id="category"
            name="category"
            multiple
            onChange={handleChangeOptions}
          >
            {category.map((e) => {
              return (
                <option id={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select> */}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
