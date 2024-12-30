import { createFileRoute } from "@tanstack/react-router";

export const postRoute = createFileRoute("/posts/$postId")({
  component: Post,
});

function Post() {
  const { postId } = postRoute.useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Post Details</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
}
