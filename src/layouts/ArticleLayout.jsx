import PageLayout from "./PageLayout";

const ArticleLayout = (props) => {
  return (
    <PageLayout>
      <div
        className="container"
        style={{ paddingTop: "100px" }}
        id="articleContent"
      >
        {props.children}
      </div>
    </PageLayout>
  );
};

export default ArticleLayout;
