import { useQuery, useQueryClient } from '@tanstack/react-query';
import { KEYS } from '@constants';
import { shortenerService } from '@services';
import { Response } from '@models';
import { Container } from './styles';
import { Input, showError } from '@components';

interface UrlListItemsProps {
  items?: Response[];
}

export const UrlList = () => {
  const { data } = useQuery({
    queryKey: [KEYS.LIST],
    queryFn: async () => {
      return await shortenerService.all();
    },
  });

  return (
    <Container>
      <ul>
        <div className="result-links">
          <img src="./src/assets/icons/list.png" alt="original url" />
          <p>Your Custom Links</p>
        </div>
        <UrlListItems items={data} />
      </ul>
    </Container>
  );
};

const UrlListItems = ({ items }: UrlListItemsProps) => {
  const queryClient = useQueryClient();

  const handleDeleteUrl = async (id: number | undefined) => {
    try {
      if (id) {
        await shortenerService.delete(id);
      }
      queryClient.refetchQueries({ queryKey: [KEYS.LIST] });
    } catch (error) {
      const { message } = error as { message: string };

      showError(message);
    }
  };

  return items?.map((item) => (
    <li key={item.id}>
      <Input type="text" readOnly={true} value={`http://localhost:8080/${item.shortUrl}`} />
      <button onClick={() => handleDeleteUrl(item.id)}>
        <img src="./src/assets/icons/trash.png" alt="delete" />
      </button>
    </li>
  ));
};
