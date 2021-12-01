import React, { ReactElement, useEffect } from "react";
import { getTopics } from "../../../utils/googlesheets";
import BlogLayout from "../../components/Layout/BlogLayout";

interface Props {}

function Blog(props: Props) {
  return <>Blog Post</>;
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <BlogLayout>{page}</BlogLayout>
    </>
  );
};

export default Blog;
