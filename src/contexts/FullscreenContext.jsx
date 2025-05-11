import React, { createContext, useContext, useState } from "react";

const FullscreenContext = createContext({ value: false, set: () => {} });

export function FullscreenProvider({ children }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const contextValue = { value: isFullscreen, set: setIsFullscreen };
  return (
    <FullscreenContext.Provider value={contextValue}>
      {children}
    </FullscreenContext.Provider>
  );
}

export function useFullscreen() {
  return useContext(FullscreenContext);
}
