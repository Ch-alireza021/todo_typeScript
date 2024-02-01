import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FC } from "react";

interface Length {
  length: number;
  page: { page: number; handlePage: (page: number) => void };
}

const paginate: FC<Length> = ({ length, page: pageState }) => {
  const page = Math.ceil(length / 5);
  const handleChangePage = (
    _event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    pageState.handlePage(newPage);
  };

  console.log(pageState.page);
  return (
    <Stack spacing={2}>
      <Pagination
        count={page}
        onChange={handleChangePage}
        shape="rounded"
      />
    </Stack>
  );
};

export default paginate;
