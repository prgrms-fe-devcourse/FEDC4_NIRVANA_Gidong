const createFormData = (
  content: string,
  channelId: string,
  postId?: string
) => {
  const formData = new FormData();

  formData.append('title', content);
  formData.append('channelId', channelId);
  formData.append('image', null);
  if (postId) formData.append('postId', postId);
  return formData;
};

export default createFormData;
