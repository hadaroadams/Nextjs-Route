import { comments } from "../data";
import { redirect } from "next/navigation";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { text } = await req.json();
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
};
