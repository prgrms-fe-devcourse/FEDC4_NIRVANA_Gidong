interface PostingHelperProps {
  totalTime: number;
  channelLabel: string;
}

const PostingHelper = ({ totalTime, channelLabel }: PostingHelperProps) => {
  return (
    <>
      <p>
        총 <b>{totalTime / 60}</b>분 동안 명상을 진행했어요!
      </p>
      <p>
        <u>{channelLabel}</u>에 대해 어떤 생각을 하셨나요?
      </p>
    </>
  );
};

export default PostingHelper;
