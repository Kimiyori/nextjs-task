import { FC } from 'react';
import { CommentButton, SideCommentsWrapper, TextArea } from './SideComments.elements';

export const SideComments:FC = () => {
  return (
    <SideCommentsWrapper title={'Share your thoughts'}>
      <hr />
      <TextArea />
      <CommentButton type="button">Save</CommentButton>
    </SideCommentsWrapper>
  );
};
