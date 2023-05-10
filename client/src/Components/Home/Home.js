import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";

function Home() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Math.random(),
      text: e.target.comment.value,
      timestamp: new Date().getTime(),
    };
    setComments([newComment, ...comments]);
    e.target.comment.value = "";
  };

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Welcome to Sphere</h1>
        <div className="row">
          <div className="col-md-8">
            <h2 className="mb-4">Comment Feed</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="comment"
                  placeholder="What's on your mind?"
                  rows="3"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Comment
              </button>
            </form>
            {comments.length > 0 ? (
              <div className="mt-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="card mb-2">
                    <div className="card-body">
                      <p>{comment.text}</p>
                      <p className="text-muted">{comment.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4">No comments yet. Be the first to comment!</p>
            )}
          </div>
          <div className="col-md-4">
            <h2>Something Else</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique hendrerit justo, nec rutrum velit commodo a. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
