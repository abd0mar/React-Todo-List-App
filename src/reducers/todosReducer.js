export default function todosReducer(currentTodos, action) {
  switch (action.type) {
    case "added":
      return [
        ...currentTodos,
        { id: action.payload.id, title: action.payload.title, status: "unfinished" }
      ];
    case "delete":
      return currentTodos.filter((task) => task.id !== action.payload.id);

    case "finishTask":
      return currentTodos.map((t) => t.id === action.payload.id ? { ...t, status: t.status === "finished" ? "unfinished" : "finished" } : t)
    default:
      throw Error("Unknown action: " + action.type);
  }
}