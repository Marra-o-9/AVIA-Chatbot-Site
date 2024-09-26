import React from "react";

function Services() {
  const services = [
    { id: 1, name: "Serviço A", description: "Descrição do Serviço A" },
    { id: 2, name: "Serviço B", description: "Descrição do Serviço B" },
  ];

  return (
    <div>
      <h1>Catálogo de Serviços</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
