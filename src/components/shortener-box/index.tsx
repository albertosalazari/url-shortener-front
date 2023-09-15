import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, showError } from '@components';
import { shortenerService } from '@services';
import { useContext } from 'react';
import { UrlInfoContext } from '@contexts';
import { useQueryClient } from '@tanstack/react-query';
import { KEYS } from '@constants';

type SubmitDataProps = {
  url: string;
  alias?: string;
};

const submitSchema = yup.object({
  url: yup
    .string()
    .required('The URL field is required!')
    .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Invalid URL!'),
  alias: yup.string().matches(/^[0-9a-zA-Z]*$/, 'The alias format is invalid!'),
});

export const ShortenerBox = () => {
  const queryClient = useQueryClient();
  const { setUrlInfo } = useContext(UrlInfoContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubmitDataProps>({
    resolver: yupResolver(submitSchema),
  });

  const submit = async (data: SubmitDataProps) => {
    try {
      let shortUrl = {};

      shortUrl = await shortenerService.create({
        originalUrl: data.url,
        customUrl: data.alias ?? '',
      });

      setUrlInfo(shortUrl);
      queryClient.refetchQueries({ queryKey: [KEYS.LIST] });
    } catch (error) {
      const { message } = error as { message: string };

      showError(message);
    }
  };

  const onSubmit = handleSubmit(submit);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div className="label_title">
          <img src="./src/assets/icons/link.png" alt="original url" />
          <label htmlFor="url">Shorten a long URL</label>
        </div>
        <Input
          id="url"
          name="url"
          type="text"
          placeholder="Enter long link here"
          register={register}
          errorMessage={errors.url?.message}
        />
        <div className="label_title">
          <img src="./src/assets/icons/edit.png" alt="custom url" />
          <label htmlFor="alias">Customize your link</label>
        </div>
        <div className="alias">
          <p>http://localhost:8080/</p>
          <Input
            id="alias"
            name="alias"
            type="text"
            placeholder="Enter alias"
            register={register}
            errorMessage={errors.alias?.message}
          />
        </div>
        <Button type="submit" title="Shorten" isLoading={isSubmitting} />
      </form>
    </Container>
  );
};
