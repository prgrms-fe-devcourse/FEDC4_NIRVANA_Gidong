import { User } from './User';
import { Comment } from './Comment';
export interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post: string | null;
  createdAt: string;
  updatedAt: string;
  follow?: string;
  comment?: Comment;
  message?: string;
}
