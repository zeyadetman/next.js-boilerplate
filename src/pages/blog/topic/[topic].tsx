import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import React, { ReactElement } from "react";
import BlogLayout from "../../../components/Layout/BlogLayout";

interface Props {
  topic: string;
}

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  const paths: any[] = [
    { params: { topic: "all" } },
    { params: { topic: "development" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: any }> {
  const {
    params: { topic },
  }: any = context;
  return {
    props: {
      topic,
    },
  };
}

function TopicPage(props: Props) {
  const { topic } = props;

  return <>Topic Page - {topic}</>;
}

TopicPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <BlogLayout>{page}</BlogLayout>
    </>
  );
};

export default TopicPage;
