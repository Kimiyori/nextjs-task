import { FC } from 'react';
import SideCommentsWrapper, { CommentButton, TextArea } from './SideComments.elements';

const SideComments: FC = () => {
  return (
    <SideCommentsWrapper title={'Share your thoughts'}>
      <hr />
      <TextArea />
      <CommentButton type="button">Save</CommentButton>
    </SideCommentsWrapper>
  );
};
export default SideComments;
