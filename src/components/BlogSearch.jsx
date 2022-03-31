import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogDataHandler, selectSearchInput } from "../store/userSlice";
import "./BlogSearch.css";
const BlogSearch = () => {
  const [blogs, setBlogs] = useState();
  const searchInput = useSelector(selectSearchInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=72b9f0aa3ea391b06f1ced895798631a`;

 
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(blogDataHandler(response.data));
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blog_url, dispatch]);

  return (
    <div className="blog__page">
  <h1 className="blog__page__header">Trending Blogs</h1> 
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" rel="noreferrer" href={blog.url}>
            <img src={blog.image} alt="" />
            <div>
              <h3 className="sourceName"> </h3>
              <span>{blog.source.name}</span>
              <p>{blog.description}</p>
            </div>
          </a>
        
        ))}
        {blogs?.totalArticles === 0 &&  <h1 className="no__blogs">
            Nothing was found 😞.<br/> Please try look something else.
          </h1>}
      </div>
    </div>
  );
};

export default BlogSearch;
