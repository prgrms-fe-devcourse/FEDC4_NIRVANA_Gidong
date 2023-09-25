import { Post } from '@/types';

type OmitPost = Omit<Post, 'author'>;

export interface EditedPost extends OmitPost {
  author: string;
}
