import { NOTICE_TYPE } from '../constants';

const typeToPath = (type: string, id: string) => {
  switch (type) {
    case NOTICE_TYPE.COMMENT:
      return `/posts/${id}`;
    case NOTICE_TYPE.LIKE:
      return `/posts/${id}`;
    case NOTICE_TYPE.FOLLOW:
      return `/profile/${id}`;
  }
};

export default typeToPath;
