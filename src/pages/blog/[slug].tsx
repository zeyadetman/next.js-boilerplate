import React, { ReactElement } from "react";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/Layout/BlogLayout";

interface Props {}

function BlogPost(props: Props) {
  const {} = props;

  return <>Blog Post</>;
}

BlogPost.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlogLayout>{page}</BlogLayout>
    </Layout>
  );
};

export default BlogPost;
