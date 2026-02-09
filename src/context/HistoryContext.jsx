import { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const addHistory = (item) => {
    setHistory(prev => [item, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const removeItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory, clearHistory, removeItem }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => useContext(HistoryContext);
