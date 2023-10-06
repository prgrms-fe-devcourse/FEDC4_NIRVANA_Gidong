import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import postCreateNewPost from '@apis/posting';
import { Toast } from '@components/Toast';
import { purifyContent, appendFormData } from './utils';
import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import {
  ContentContainer,
  StyledDescription,
  StyledPosting
} from './Posting.style';
import PostingHelper from './components/NewPost/PostingHelper';

interface MutationParams {
  posting: string;
}

interface ReceiveState {
  totalTime: number;
  channelId: string;
  channelLabel: string;
  validation: boolean;
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
      await postCreateNewPost(customToken, formData);
    },
    onSuccess: () => {
      sessionStorage.removeItem('posting');
      navigate('/posts', {
        state: {
          channelInfo: {
            id: channelId,
            label: channelLabel
          }
        }
      });
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
  }, [location.state, navigate]);

  return (
    <StyledPosting>
      {isError && (
        <Toast
          type={'ERROR'}
          content='글을 발행할 수 없습니다. 잠시 후 다시 시도해주세요.'
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
