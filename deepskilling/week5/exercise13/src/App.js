import React from "react";
import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = false;

  return (
    <div className="container">

      <h1>Blogger App</h1>

      {/* 1. IF-ELSE using function */}
      {(() => {
        if (showBook) {
          return <BookDetails />;
        } else {
          return <h3>No Book Details</h3>;
        }
      })()}

      {/* 2. Logical AND */}
      {showBlog && <BlogDetails />}

      {/* 3. Ternary Operator */}
      {showCourse ? <CourseDetails /> : <h3>Course Details Hidden</h3>}

    </div>
  );
}

export default App;