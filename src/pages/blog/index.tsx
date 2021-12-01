import React, { ReactElement, useEffect } from "react";
import { getTopics } from "../../../utils/googlesheets";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/Layout/BlogLayout";

interface Props {}

function Blog(props: Props) {
  return <>Blog Post</>;
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlogLayout>{page}</BlogLayout>
    </Layout>
  );
};

export default Blog;
