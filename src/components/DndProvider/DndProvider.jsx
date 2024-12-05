import DndContext from "@/context/DndContext";
import { useCallback, useState } from "react";

const DndContextProvider = ({ children }) => {
  const [dragIndex, setDragIndex] = useState(null);
  const [dropIndex, setDropIndex] = useState(null);

  const handleDragStart = useCallback(
    (index) => dragIndex !== index && setDragIndex(index),
    [dragIndex]
  );

  const handleDragEnter = useCallback(
    (index) => dropIndex !== index && setDropIndex(index),
    [dropIndex]
  );

  const handleDragEnd = useCallback(() => {
    dragIndex !== null && setDragIndex(null);
    dropIndex !== null && setDropIndex(null);
    }, [dragIndex, dropIndex]);

  return (
    <DndContext.Provider
      value={{
        dragIndex: dragIndex,
        dropIndex: dropIndex,
        onDragStart: handleDragStart,
        onDragEnter: handleDragEnter,
        onDragEnd: handleDragEnd,
      }}
    >
      {children}
    </DndContext.Provider>
  );
};

export default DndContextProvider;
