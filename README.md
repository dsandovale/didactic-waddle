# didactic-waddle

Vamos a simular dos "servicios externos" (que bien podrían ser librerías o módulos de terceros) que realizan sumas. Luego, crearemos una interfaz que defina cómo debe ser un servicio de suma y la usaremos en una función principal.

project-root/
├── src/
│   ├── interfaces/
│   │   └── ISummingService.js     // Nuestra "interfaz" conceptual
│   ├── external_services/
│   │   ├── SimpleSumService.js    // Implementación 1
│   │   └── ComplexSumService.js   // Implementación 2 (simula una librería externa)
│   └── main.js                    // Punto de entrada de la aplicación
└── package.json