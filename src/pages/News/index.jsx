import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NewsContainer } from "./styles";
import NavBar from "../../components/NavBar/index.jsx";

export function News() {
  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state]);

  if (!state) return <></>;

  const formattedDate = new Date(state.publishedAt).toLocaleDateString();

  return (
    <>
      <NavBar />
      <NewsContainer>
        <section>
          <h1>{state.title}</h1>
          <span>
            {formattedDate} by <strong>{state.author}</strong>
          </span>
          <img
            src={
              state.urlToImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08amFLXHaX7YhL45zXN7BVHv75R44r9DZSA&s"
            }
            alt="???"
          />
          <p>{state.description}</p>
          <a target="_blank" href={state.url}>
            <h2>Read More</h2>
          </a>
        </section>
      </NewsContainer>
    </>
  );
}
