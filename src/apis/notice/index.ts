import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { Notification } from '@/types/Notification';

interface postNotificationsParams {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: null | string;
}

const getNotifications = async (token: string) => {
  const response = await axios.get<Notification[]>(
    `${API_BASE_URL}/notifications`,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const putNotifications = async (token: string) => {
  const response = await axios.put(`${API_BASE_URL}/notifications/seen`, null, {
    headers: {
      Authorization: token
    }
  });
  return response.data;
};

const postNotifications = async (
  token: string,
  notificationData: postNotificationsParams
) => {
  const response = await axios.post<Notification>(
    `${API_BASE_URL}/notifications/create`,
    notificationData,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  return response.data;
};

export { getNotifications, putNotifications, postNotifications };
