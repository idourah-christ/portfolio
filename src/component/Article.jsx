import ArticleLayout from "../layouts/ArticleLayout";
import "./Article.css";

export const ArticleImage = (props) => {
  return (
    <img alt="article-img" className="article-img" src={props.src} {...props} />
  );
};

export const Article = (props) => {
  return (
    <ArticleLayout>
      <article className="article">{props.children}</article>
    </ArticleLayout>
  );
};

export const ArticleHeader = (props) => {
  return (
    <div className="article-header">
      <h3 className="artcle-title">{props.header.title}</h3>
      {props.children}
    </div>
  );
};

export const ArticleParagraphe = (props) => {
  return (
    <p
      className="article-paragraphe"
      {...props}
      style={{ fontSize: "18px", textAlign: "justify" }}
    >
      {props.children}
    </p>
  );
};
export const ArticleBlock = (props) => {
  return (
    <div className="article-block" {...props} style={{ marginBottom: "14px" }}>
      <h6 className="article-block-title">{props.title}</h6>
      <section className="article-block-content">{props.children}</section>
    </div>
  );
};

export const UnOrderList = (props) => {
  return (
    <ul className="article-list" {...props}>
      {props.children}
    </ul>
  );
};
export const OrderList = (props) => {
  return (
    <ol {...props} className="article-list">
      {props.children}
    </ol>
  );
};
