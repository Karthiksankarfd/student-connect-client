import React, { useContext, useEffect } from "react";
import { searchResultContext } from "../../context/searchContext";
import PeopleCategoryListCard from "./PeopleCategoryListCard";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import API from "../../services/API";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const { searchResult, setSearchResult } = useContext(searchResultContext);
  const {querySearchParams} = useContext(searchResultContext)

  // const {fetchSearchResults} =  useSearch()
  console.log(searchResult);
  // console.log(typeof []);

  const fetchSearchResults = async (searchTerm) => {
    console.log("fetchSearchResults called .. hitting api...", searchTerm);
    if (searchTerm === null) {
      console.log("no querry present ... ");
      return;
    }
    try {
      // const res =  await API.get(`/search?query=${searchTerm}`)
      const res = await API.get("/search", { params: { query: searchTerm } });
      if (res.status === 200) {
        setSearchResult(res.data);

      }
    } catch (e) {
      console.log(e, "Error fetching the query");
    }
  };

  useEffect(() => {
    console.log("fetching result on component mount...")
    fetchSearchResults(keyword);
  }, [keyword,querySearchParams]);

  return (
    <div>

      {searchResult?.searchResult?.people?.map((person) => (
        <PeopleCategoryListCard key={person._id} {...person} />
      ))}

      {searchResult?.searchResult?.mentors?.map((mentor) => (
        <PeopleCategoryListCard key={mentor._id} {...mentor} />
      ))}
    </div>
  );
};

export default Results;
