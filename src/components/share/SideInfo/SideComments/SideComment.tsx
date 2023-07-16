import { CommentButton, SideCommentsWrapper, TextArea } from './SideComments.elements';

export const SideComments = () => {
  return (
    <>
      <SideCommentsWrapper title={'Share your thoughts'}>
        <hr />
        <TextArea />
        <CommentButton type="button">Save</CommentButton>
      </SideCommentsWrapper>
    </>
  );
};
