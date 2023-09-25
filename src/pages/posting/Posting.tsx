import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import { appendFormData, purifyContent } from './utils';
import {
  ContentContainer,
  StyledDescription,
  StyledPosting
} from './Posting.style';
import PostingHelper from './components/NewPost/PostingHelper';
import { useMutation } from '@tanstack/react-query';
import postCreateNewPost from '@apis/posting';
import { Toast } from '@components/Toast';

interface ReceiveState {
  totalTime: number;
  channelId: string;
  channelLabel: string;
  validation: boolean;
}

interface MutationParams {
  posting: string;
}

const Posting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = JSON.parse(sessionStorage.getItem('userData'));
  const [meditationInfo, setMeditationInfo] = useState<ReceiveState>({
    totalTime: 0,
    channelId: '',
    channelLabel: '',
    validation: false
  });
  const { totalTime, channelLabel, channelId } = meditationInfo;
  const customToken = `bearer ${token}`;
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: async ({ posting = '' }: MutationParams) => {
      const formData = createPostingForm(posting);
      postCreateNewPost(customToken, formData);
    },
    onSuccess: () => {
      sessionStorage.removeItem('posting');
      navigate('/posts', { state: { channelId: channelId } });
    }
  });

  const createPostingForm = (posting: string) => {
    const customPosting = {
      title: purifyContent(posting),
      meditationTime: `${totalTime / 60}`
    };
    const formKey = ['title', 'channelId', 'image'];
    const formData = appendFormData(
      formKey,
      JSON.stringify(customPosting),
      channelId,
      null
    );

    return formData;
  };

  useEffect(() => {
    if (location.state === null) {
      navigate('/404');
    }
    setMeditationInfo(location.state);
  }, []);

  return (
    <StyledPosting>
      {isError && (
        <Toast
          type={'ERROR'}
          content='포스트를 발행하는 데 실패했습니다. 다시 시도해주세요.'
        />
      )}
      <ContentContainer>
        <StyledDescription>
          <PostingHelper
            totalTime={totalTime}
            channelLabel={channelLabel}
          />
        </StyledDescription>
        <NewPost
          meditationInfo={meditationInfo}
          mutatePosting={mutate}
          isLoading={isLoading}
        />
        <SkipPosting mutatePosting={mutate} />
      </ContentContainer>
    </StyledPosting>
  );
};

export default Posting;
