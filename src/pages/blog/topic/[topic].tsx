import React, { ReactElement } from "react";
import Layout from "../../../components/Layout";
import BlogLayout from "../../../components/Layout/BlogLayout";

interface Props {}

function TopicPage(props: Props) {
  const {} = props;

  return <>Topic Page</>;
}

TopicPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlogLayout>{page}</BlogLayout>
    </Layout>
  );
};

export default TopicPage;
