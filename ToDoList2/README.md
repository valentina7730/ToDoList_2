# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# ToDoList - React + Vite

Una aplicación de lista de tareas (ToDo List) desarrollada con **React** y **Vite**.

## Características

- Agregar nuevas tareas
- Marcar tareas como completadas con checkbox
- Eliminar tareas
- Arrastrar y soltar tareas entre estados ("To do", "In Dev", "Done")


## Instalación

1. Clona el repositorio:
   bash
   git clone https://github.com/tu-usuario/todolist-react.git
   cd todolist-react
   

2. Instala las dependencias:
   
   npm install
 

3. Inicia la aplicación en modo desarrollo:
   bash
   npm run dev
   

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto


src/
  ├── Components/
  │     └── StatusTasks.jsx
  ├── App.jsx
  ├── App.css
  └── main.jsx


## Uso

- Escribe una tarea en el campo de texto y haz clic en "Add Task" para agregarla.
- Usa el checkbox para marcar una tarea como completada.
- Haz clic en el icono de la papelera para eliminar una tarea.
- Arrastra tareas entre las columnas para cambiar su estado.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Autor

Valentina Quintero Godoy

