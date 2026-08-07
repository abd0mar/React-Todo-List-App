# React Task Manager App

A clean, responsive, and feature-rich Todo List application built with **React**, **Material-UI (MUI)**, and custom **CSS**.

This project demonstrates clean architecture by utilizing **React Context API** with separate context providers for state data and actions to prevent unnecessary re-renders.

---

## 🚀 Features

- **Task Management:** Add new tasks, mark tasks as finished/unfinished, and delete tasks.
- **Filter Functionality:** Seamlessly filter tasks by status (`All`, `Finished`, `Unfinished`).
- **Optimized Architecture:** Uses `useContext` split into Data and Actions Contexts (`TaskDataContext` and `TasksActionsContext`) to ensure maintainable state management and optimal rendering performance.
- **Responsive UI:** Custom-styled components integrated with Material-UI components (`Paper`, `ToggleButtonGroup`, `Dialog`) for a smooth user experience across desktop and mobile screens.

---

## 🛠️ Tech Stack

- **Frontend Library:** React.js
- **UI Framework:** Material-UI (MUI) & MUI Icons
- **Styling:** CSS3 & Flexbox
- **State Management:** React Context API (`useContext`, `createContext`)

---

## 📂 Project Structure

```text
src/
├── component/
│   ├── AddTasks.js          # Input component for adding tasks
│   ├── EditTask.js          # MUI Dialog component for editing tasks
│   ├── Filter.js            # Toggle button group for filtering
│   ├── Task.js              # Individual task item component
│   ├── TasksContainer.js    # Container rendering filter, input, and list
│   └── TodoList.js          # Main wrapper card
├── context/
│   ├── TasksActionsContext.js # Context providing handler functions
│   └── TasksDataContext.js    # Context providing application state
├── App.js                   # Root component wrapped with Context Providers
├── index.css                # Global styles and responsive layout
└── index.js                 # React DOM root entry point
```
