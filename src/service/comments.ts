import { IComment } from "../interfaces";

interface IFetchComment {
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  page: number;
}

export const fetchComments = async ({
  page,
  itemsPerPage,
  setTotalPages,
}: IFetchComment): Promise<IComment[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${itemsPerPage}`
  );
  const totalCount = res.headers.get("X-Total-Count");
  if (totalCount) {
    setTotalPages(Math.ceil(parseInt(totalCount, 10) / itemsPerPage));
  }
  return res.json();
};

const createComment = async (newComment: IComment) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res.json();
};
