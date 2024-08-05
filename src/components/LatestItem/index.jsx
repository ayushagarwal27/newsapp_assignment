import { LatestItemContainer } from "./styles";

export function LatestItem({ data }) {
  return (
    <LatestItemContainer to="/detailedNews" state={data} image={data.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08amFLXHaX7YhL45zXN7BVHv75R44r9DZSA&s"}>
      <p>{data.title}</p>
    </LatestItemContainer>
  );
}
