import React, { ReactElement } from "react";
import { getTopics } from "../../../utils/googlesheets";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/Layout/BlogLayout";

interface Props {
  w: any;
}

export const getStaticProps = async () => {
  const w = await getTopics();
  console.log(w);
  return {
    props: {
      w,
    },
  };
};

function Blog(props: Props) {
  const { w } = props;

  console.log({ w });
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
