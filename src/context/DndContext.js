import { createContext } from "react";

const DndContext = createContext({
  dragIndex: null,
  dropIndex: null,
  onDragStart: () => {},
  onDragEnter: () => {},
  onDragEnd: () => {},
});

export default DndContext;
