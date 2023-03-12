import { AcctActivity } from 'hooks/useAccount/useGetAcctActivity/types';

// Filter transfers from a date
// Ex: filterByDate(new Date("2023-03-09T21:56:15.42Z")) dateFilter = toISOString
export const filterByDate = (data: AcctActivity[], dateFilter: Date) => {
  return data.filter(transfer => {
    const date = new Date(transfer.dated);
    return date > dateFilter;
  });
};

export const filterByText = (data: AcctActivity[], text: string) => {
  // Returns filtered transfers if the 'description' field has the text of the 'text' parameter
  return data.filter(tranfer =>
    tranfer.type.toLowerCase().includes(text.toLowerCase())
  );
};

export const pagination = (
  data: AcctActivity[],
  limit: number,
  page: number
) => {
  // Calculates the index of the first and last item on the page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Returns the requested page from the array and paging information
  return {
    data: data.slice(startIndex, endIndex),
    pages: Math.ceil(data.length / limit),
    currentPage: page
  };
};
