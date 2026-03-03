# PGL-UserLogin

# PGL-UserLogin (Cliente móvil)

Aplicación móvil desarrollada con **React Native (Expo)** que implementa un sistema de autenticación mediante consumo de una API REST externa. El proyecto se centra en la gestión de sesión, control de acceso a rutas protegidas y comunicación segura con servicios backend utilizando JWT.

---

## Objetivo académico

El objetivo del proyecto es demostrar la capacidad de:

- Consumir una API REST desde una aplicación móvil.
- Implementar autenticación basada en token (JWT).
- Gestionar sesión en el cliente mediante almacenamiento local.
- Proteger rutas y pantallas privadas.
- Aplicar buenas prácticas de organización del código y separación de responsabilidades.
- Manejar peticiones HTTP tipadas y control de errores.

---

## Funcionalidades implementadas

- Formulario de registro conectado a una API externa.
- Formulario de login con validación previa.
- Recepción de token JWT tras autenticación correcta.
- Almacenamiento del token en el dispositivo mediante AsyncStorage.
- Implementación de guards de navegación para impedir acceso sin sesión.
- Inclusión automática del token en cabeceras HTTP (`Authorization: Bearer <token>`).
- Peticiones autenticadas a endpoints protegidos (por ejemplo, `/welcome`).
- Manejo estructurado de errores HTTP (400, 401, etc.).

---

## Arquitectura del cliente

La aplicación sigue una estructura modular:

### 1. Capa de presentación

- Pantallas de login, registro y bienvenida.
- Navegación mediante Expo Router y Drawer Layout.
- Gestión de estado con `useState` y control de efectos con `useEffect`.

### 2. Capa de servicios

- Servicio HTTP genérico (`httpRequest<T>`) para centralizar:
  - Construcción de peticiones.
  - Tratamiento de respuestas.
  - Manejo de errores.
- Servicios específicos (`authService`, `welcomeService`).
- Gestión del token en un servicio dedicado (`tokenService`).

### 3. Gestión de sesión

- Persistencia del token con AsyncStorage.
- Verificación automática del token al cargar layouts protegidos.
- Redirección automática al login si no existe token válido.

---

## Flujo de autenticación

1. El usuario introduce credenciales.
2. La aplicación envía un `POST` al endpoint de login de la API externa.
3. La API devuelve un token JWT.
4. El token se almacena localmente.
5. Las pantallas protegidas verifican la existencia del token.
6. Las peticiones privadas incluyen la cabecera `Authorization`.

---

## Tecnologías utilizadas

- React Native
- Expo Router
- TypeScript
- AsyncStorage
- Fetch API

---

## Competencias demostradas

- Programación asíncrona con `async/await`.
- Gestión del ciclo de vida del componente en React.
- Encapsulamiento de lógica en servicios reutilizables.
- Implementación de control de acceso en cliente.
- Consumo seguro de APIs REST.
- Manejo tipado de respuestas HTTP mediante genéricos.

#Ejercicios
[Ejercicio_1](Ejercicio_1)
[Ejercicio_2](Ejercicio_2)
[Ejercicio_3](Ejercicio_3)
[Ejercicio_4](Ejercicio_4)
[Ejercicio_5](Ejercicio_5)
