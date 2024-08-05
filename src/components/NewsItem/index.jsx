import { NewsItemContainer } from "./styles";

export function NewsItem({ data }) {
  const formattedDate = new Date(data.publishedAt).toLocaleDateString();

  return (
    <NewsItemContainer to="/detailedNews" state={data}>
      <div>
        <img  src={data.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08amFLXHaX7YhL45zXN7BVHv75R44r9DZSA&s"} alt="news" />
      </div>
      <section>
        <span>{formattedDate}</span>
        <p>{data.title}</p>
      </section>
    </NewsItemContainer>
  );
}
