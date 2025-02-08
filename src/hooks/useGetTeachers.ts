import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetTeachers = ({ filters }:{filters: any}) => {
  console.log("hook filters",filters);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => axios.get("http://localhost:4000/api/teachers?per_page=25"),
    placeholderData: keepPreviousData,
  });

  return { data: data?.data, isLoading, isError };
};
