import { keepPreviousData, useQuery } from "@tanstack/react-query";
import queryString from 'query-string';
import axios from "axios";

export const useGetTeachers = ({ filters }:{filters: any}) => {
  
  const filtersString = queryString.stringify(filters);
  let url = "http://localhost:4000/api/teachers"
  if(filtersString){
    url += `?${filtersString}`
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => axios.get(url),
    placeholderData: keepPreviousData,
  });

  return { data: data?.data, isLoading, isError };
};
