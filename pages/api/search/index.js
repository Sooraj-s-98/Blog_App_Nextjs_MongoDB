import { ValidateProps } from '@/api-lib/constants';
import { searchPosts } from '@/api-lib/db';
import { auths, database, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.use(database);


handler.post(
  ...auths,
  validateBody({
    type: 'object',
    properties: {
      content: ValidateProps.post.content,
    },
    required: ['content'],
    additionalProperties: false,
  }),
  async (req, res) => {

    const post = await searchPosts(req.db, req.body.content);
    console.log(post);
    return res.json({ post });
   
  }
);

export default handler;
