import React, { ReactNode, createContext, useState } from 'react';

interface UrlInfoProps {
  id?: number;
  originalUrl?: string;
  shortUrl?: string;
}

interface UrlInfoContextProps {
  urlInfo: UrlInfoProps;
  setUrlInfo: React.Dispatch<React.SetStateAction<UrlInfoProps>>;
}

interface UrlInfoProviderProps {
  children: ReactNode;
}

const defaultUrlInfo: UrlInfoProps = { id: 0, originalUrl: '', shortUrl: '' };

export const UrlInfoContext = createContext<UrlInfoContextProps>({
  urlInfo: defaultUrlInfo,
  setUrlInfo: () => {},
});

export const UrlInfoProvider = ({ children }: UrlInfoProviderProps) => {
  const [urlInfo, setUrlInfo] = useState(defaultUrlInfo);

  return (
    <UrlInfoContext.Provider value={{ urlInfo, setUrlInfo }}>{children}</UrlInfoContext.Provider>
  );
};
