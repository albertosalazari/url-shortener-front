import { useContext } from 'react';
import { Container } from './styles';
import { UrlInfoContext } from '@contexts';

export const ShortLinkBox = () => {
  const { urlInfo } = useContext(UrlInfoContext);

  return (
    <Container>
      <div className="result_link">
        <img src="./src/assets/icons/link.png" alt="original url" />
        <p>Original Link</p>
      </div>
      <input type="text" className="link" value={urlInfo.originalUrl} readOnly={true} />
      <div className="result_link">
        <img src="./src/assets/icons/closed-link.png" alt="custom url" />
        <p>Your Short Link</p>
      </div>
      <input
        type="text"
        className="link"
        value={`http://localhost:8080/${urlInfo.shortUrl}`}
        readOnly={true}
      />
    </Container>
  );
};
