import { User } from './User';
import { Channel } from './Channel';
import { Comment } from './Comment';
import { Like } from './Like';

export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface EditedPost extends Post {
  meditationTime: number;
  content: string | undefined;
}

type OmitPost = Omit<Post, 'author'>;

export interface SearchEditedPost extends OmitPost {
  author: string;
}

export type RawTitleData = {
  content: string;
  meditationTime: number;
};
