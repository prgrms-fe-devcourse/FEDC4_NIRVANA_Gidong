import { Post } from './Post';
import { Like } from './Like';
import { Notification } from './Notification';
import { Message } from './Message';
import { Follow } from './Follow';

export interface User {
  coverImage: string;
  image: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Post[];
  likes: Like[];
  comments: string[];
  followers: Follow[];
  following: Follow[];
  notifications: Notification[];
  messages: Message[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}
