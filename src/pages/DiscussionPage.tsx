import React, { useState } from "react";
import { addComment, getComments } from "../mockBackend";

export default function DiscussionPage() {
  const [comments, setComments] = useState(() => getComments());
  const [newComment, setNewComment] = useState("");
  const [user] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser).name : null;
  });

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    if (!user) {
      alert("Du måste vara inloggad för att kommentera.");
      return;
    }
    const updatedComments = addComment(user, newComment.trim());
    setComments(updatedComments);
    setNewComment("");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Diskussionsforum</h1>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Skriv en kommentar:</h2>
        {user ? (
          <>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Vad tycker du inför nästa träff?"
            />
            <button onClick={handleAddComment} className="btn btn-primary mt-4">
              Lägg till kommentar
            </button>
          </>
        ) : (
          <p className="text-red-500">Logga in för att kunna kommentera.</p>
        )}
      </div>
      <div className="bg-gray-100 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Kommentarer:</h2>
        {comments.length > 0 ? (
          <ul className="list-none space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <p className="text-sm text-gray-500">
                  <strong>{comment.user}</strong> - {comment.timestamp}
                </p>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Inga kommentarer än. Bli den första!</p>
        )}
      </div>
    </div>
  );
}
