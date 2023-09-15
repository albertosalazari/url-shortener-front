import { useContext, useEffect } from 'react';
import { Container, Title } from '@styles/App.styles';
import { ShortLinkBox, ShortenerBox, UrlList } from '@components';
import { StorageService } from '@services';
import { STORAGE } from '@constants';
import { UrlInfoContext } from '@contexts';

const App = () => {
  useEffect(() => {
    StorageService.removeItem(STORAGE.URL);
  }, []);

  const { urlInfo } = useContext(UrlInfoContext);

  return (
    <Container>
      <header>
        <Title>Url Shortener</Title>
      </header>
      <ShortenerBox />
      {urlInfo.originalUrl ? <ShortLinkBox /> : null}
      <UrlList />
    </Container>
  );
};

export default App;
