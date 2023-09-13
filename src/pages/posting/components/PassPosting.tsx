import postCreateNewPost from '@apis/posting';
import { Link } from '@components/Link';
import { StyledPassPosting } from './PassPosting.style';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { makeFormData } from '../utils';

interface PassPostingProps {
  channelId: string;
  customToken: string;
}

const PassPosting = ({ channelId, customToken }: PassPostingProps) => {
  const { PASS_POSTING } = POSTING_DESCRIPTION;

  const handleClickPassPost = () => {
    const formData = makeFormData('', channelId);
    postCreateNewPost(customToken, formData);
  };

  return (
    <StyledPassPosting onClick={handleClickPassPost}>
      <Link
        pageLink={'/posts'}
        size={14}
        color={'white'}>
        {PASS_POSTING}
      </Link>
    </StyledPassPosting>
  );
};

export default PassPosting;
