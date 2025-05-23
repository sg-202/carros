const carros = {
  Ferrari: [
    {
      nombre: "F8 Tributo",
      especificaciones: "Motor V8, 720 hp, 0-100 km/h en 2.9s",
      precio: "$276,550 USD",
      imagen: "ferrari-f8.jpg"
    }
  ],
  Lamborghini: [
    {
      nombre: "Huracán Técnica",
      especificaciones: "Motor V10, 640 hp, 0-100 km/h en 3.2s",
      precio: "$244,795 USD",
      imagen: "lamborghini-huracan.jpg"
    }
  ],
  Toyota: [
    {
      nombre: "GR Supra",
      especificaciones: "Motor 3.0L turbo, 382 hp, tracción trasera",
      precio: "$45,540 USD",
      imagen: "toyota-supra.jpg"
    }
  ],
  Porsche: [
    {
      nombre: "911 Carrera",
      especificaciones: "Motor bóxer 6 cilindros, 379 hp, 0-100 km/h en 4.2s",
      precio: "$114,400 USD",
      imagen: "porsche-911.jpg"
    }
  ],
  Audi: [
    {
      nombre: "R8 V10 Performance",
      especificaciones: "Motor V10, 602 hp, tracción quattro",
      precio: "$158,600 USD",
      imagen: "audi-r8.jpg"
    }
  ],
  BMW: [
    {
      nombre: "M8 Competition",
      especificaciones: "Motor V8 biturbo, 617 hp, tracción total",
      precio: "$134,100 USD",
      imagen: "bmw-m8.jpg"
    }
  ]
};

function cargarModelos() {
  const marca = document.getElementById('marca').value;
  const modeloSelect = document.getElementById('modelo');
  modeloSelect.innerHTML = '<option value="">-- Selecciona un modelo --</option>';

  if (marca) {
    carros[marca].forEach((carro, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = carro.nombre;
      modeloSelect.appendChild(option);
    });
    modeloSelect.style.display = 'inline-block';
  } else {
    modeloSelect.style.display = 'none';
    document.getElementById('infoCarro').style.display = 'none';
  }
}

function mostrarInfo() {
  const marca = document.getElementById('marca').value;
  const modeloIndex = document.getElementById('modelo').value;

  if (modeloIndex !== '') {
    const carro = carros[marca][modeloIndex];
    const infoDiv = document.getElementById('infoCarro');
    infoDiv.innerHTML = `
      <img src="${carro.imagen}" alt="${carro.nombre}" />
      <h3>${carro.nombre}</h3>
      <p><strong>Especificaciones:</strong> ${carro.especificaciones}</p>
      <p><strong>Precio:</strong> ${carro.precio}</p>
    `;
    infoDiv.style.display = 'block';
  }
}