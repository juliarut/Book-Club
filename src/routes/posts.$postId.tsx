import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: Post,
});

function Post() {
  const { postId } = Route.useParams();
  return <div className="p-4">Post ID: {postId}</div>;
}
