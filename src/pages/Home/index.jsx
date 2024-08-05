import axios from "axios";
import React, { useEffect, useState } from "react";
import { LatestItem } from "../../components/LatestItem";
import { NewsItem } from "../../components/NewsItem";
import { HomeContainer, LatestContainer, NewsContainer } from "./styles";
import NavBar from "../../components/NavBar/index.jsx";
import QueryInput from "../../components/QueryInput/index.jsx";
import CustomSelect from "../../components/CustomSelect/index.jsx";
import { categoryTypes, sourceTypes } from "../../constants.js";
import RefreshIcon from "../../assets/RefreshIcon.jsx";
import { toast } from "react-toastify";
import DatePicker from "../../components/DatePicker/index.jsx";
import * as config from "../../config.js";

export function Home() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [category, setSelectedCategory] = useState("general");
  const [authorsArray, setAuthorsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function getNews(type, val) {
    let url;
    if (type === "source") {
      url = config.searchBySourceAPI(val);
    }
    if (type === "category") {
      url = config.searchByCategoryAPI(category);
    }
    try {
      const response = await axios.get(url);
      const articles = response.data.articles;
      setNews(articles);
      const nextAuthors = articles.map((article) => ({
        value: article.author,
        label: article.author,
      }));
      setAuthorsArray(nextAuthors);
    } catch (err) {
      toast.error("Something went wrong! Please try again", {
        position: "top-right",
      });
    }
  }

  async function searchFromQuery(e) {
    e.preventDefault();
    const response = await axios.get(config.searchQueryAPI(searchQuery));
    const articles = response.data.articles;
    setFilteredNews(articles);
  }

  async function searchByDate(date) {
    const response = await axios.get(config.searchByDateAPI(date));
    const articles = response.data.articles;
    setFilteredNews(articles);
  }

  function handleAuthorSelect(author) {
    const nextArticles = news.filter((newsItem) => newsItem.author === author);
    setFilteredNews(nextArticles);
  }

  function refreshNews() {
    setFilteredNews([]);
    setSelectedCategory("general");
  }

  useEffect(() => {
    setFilteredNews([]);
    getNews("category");
  }, [category]);

  const latest = (filteredNews.length > 0 ? filteredNews : news).slice(0, 4);
  const random = (filteredNews.length > 0 ? filteredNews : news).slice(
    4,
    news.length
  );

  return (
    <>
      <NavBar>
        <QueryInput
          onSubmit={(e) => {
            searchFromQuery(e);
          }}
          searchQuery={searchQuery}
          onInputChange={(e) => setSearchQuery(e.target.value)}
        />
        <DatePicker
          onChange={(e) => {
            const date = e.target.value;
            if (new Date(date) > new Date()) {
              toast.error("Please select within past 7 days from today's date");
              return;
            }
            searchByDate(e.target.value);
          }}
        />

        <CustomSelect
          value={category.value}
          placeholder={"Category"}
          onChange={(val) => {
            setSelectedCategory(val.value);
          }}
          options={categoryTypes}
        />
        <CustomSelect
          onChange={(val) => {
            getNews("source", val.value);
          }}
          options={sourceTypes}
          placeholder={"Source"}
        />

        <CustomSelect
          onChange={(val) => {
            handleAuthorSelect(val.value);
          }}
          options={authorsArray}
          isDisabled={authorsArray.length === 0}
          placeholder={"Author"}
        />
        <RefreshIcon
          onClick={() => {
            refreshNews();
          }}
        />
      </NavBar>
      <HomeContainer>
        <h1>Top Headlines</h1>
        <LatestContainer>
          {latest.map((item) => {
            return <LatestItem key={item.id} data={item} />;
          })}
        </LatestContainer>
        <h2>Other News</h2>
        <NewsContainer>
          {random.map((item) => {
            return <NewsItem key={item.id} data={item} />;
          })}
        </NewsContainer>
      </HomeContainer>
    </>
  );
}
