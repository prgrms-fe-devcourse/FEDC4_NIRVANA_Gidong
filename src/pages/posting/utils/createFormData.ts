const createFormData = (content: string, channelId: string) => {
  const formData = new FormData();

  formData.append('title', content);
  formData.append('channelId', channelId);
  formData.append('image', null);

  return formData;
}

export default createFormData;
