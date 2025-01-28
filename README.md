# Facturación con Vite + Lit

Este es un software de facturación sencillo, desarrollado con **Vite** y **Lit**, que permite gestionar facturas ingresando datos del cliente, seleccionando productos, calculando automáticamente el total con IVA, y almacenando las facturas registradas en memoria (usando un objeto JSON). 

## Características principales

- **Ingreso de datos del cliente**: Nombre, identificación y otros datos.
- **Selector de productos**: Selección dinámica de productos con la opción de definir cantidades.
- **Cálculo automático**:
  - Subtotal.
  - IVA del 19%.
  - Total final.
- **Registro de facturas**: Las facturas pagadas se almacenan en un objeto para su consulta.
- **Reset automático**: Al finalizar el pago, la factura se reinicia para un nuevo registro.

## Tecnologías utilizadas

- **[Vite](https://vitejs.dev/)**: Para la construcción y desarrollo rápido del proyecto.
- **[Lit](https://lit.dev/)**: Para la creación de componentes web reutilizables y eficientes.
- **HTML, CSS y JavaScript**: Para la estructura, diseño y lógica del software.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno:

- [Node.js](https://nodejs.org/) (versión 16 o superior).
- Un gestor de paquetes como `npm` o `yarn`.

## Instalación y configuración

1. **Clona el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   cd facturacionvite.js
Instala las dependencias:

bash
Copiar
Editar
npm install
Ejecuta el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
Abre el navegador en la URL que se muestra (por defecto: http://localhost:5173).

Estructura del proyecto
perl
Copiar
Editar
facturacionvite.js/
│
├── index.html               # Archivo HTML principal
├── src/
│   ├── index.css            # Estilos CSS
│   ├── main.js              # Entrada principal del proyecto
│   ├── my-element.js        # Componente Lit para la interfaz
│
├── package.json             # Configuración del proyecto y dependencias
├── package-lock.json        # Bloqueo de dependencias
└── README.md                # Documentación del proyecto
Cómo usar el software
Ingreso de datos:
Ingresa el nombre y la identificación del cliente en el formulario.
Selección de productos:
Escoge los productos del selector.
Define la cantidad para cada producto y agrégalo a la factura.
Revisión de la factura:
Observa cómo se actualiza automáticamente el subtotal, el IVA y el total.
Registrar factura:
Haz clic en el botón "Pagar" para registrar la factura.
La factura se almacena en un registro interno y el formulario se resetea.
Capturas de pantalla ![image](https://github.com/user-attachments/assets/946f3da9-c1df-4fb3-bf8b-765db5b12d5e)
