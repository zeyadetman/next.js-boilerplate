import React, { ReactElement } from "react";
import BlogLayout from "../../components/Layout/BlogLayout";

interface Props {}

function BlogPost(props: Props) {
  const {} = props;

  return <>Blog Post</>;
}

BlogPost.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <BlogLayout>{page}</BlogLayout>
    </>
  );
};

export default BlogPost;
