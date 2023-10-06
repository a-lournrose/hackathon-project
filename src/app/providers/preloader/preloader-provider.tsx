import React, { useState } from 'react';
import { IProviderProps } from '@app/providers/i-provider-props';
import { PreloaderContext } from '@app/providers/preloader/preloader-context';
import { Preloader } from '@app/providers/preloader/preloader';

const VisibleTemp = 600;

export const PreloaderProvider = (props: IProviderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisibleTemp = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, VisibleTemp);
  };
  return (
    <PreloaderContext.Provider
      value={{
        isVisible,
        setVisible: setIsVisible,
        onVisibleTemp: handleVisibleTemp,
      }}
    >
      <>
        {isVisible && <Preloader />}
        {props.children}
      </>
    </PreloaderContext.Provider>
  );
};
