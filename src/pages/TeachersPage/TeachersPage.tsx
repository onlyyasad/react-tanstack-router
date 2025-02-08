import TeachersTable from "./components/TeachersTable";
import React, { useMemo } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { teacherColumns } from "./components/teacherColumn";
import { useGetTeachers } from "@/hooks/useGetTeachers";

const TeachersPage = () => {
  // ------ Old ------ //
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // ------

  const filters = {};

  const { data: teachersData } = useGetTeachers({ filters });

  console.log(teachersData?.data);

  const columns = useMemo(() => teacherColumns, [teachersData]);

  if (!teachersData) return;

  return (
    <TeachersTable
      teachersData={teachersData}
      columns={columns}
      sorting={sorting}
      columnFilters={columnFilters}
      columnVisibility={columnVisibility}
      rowSelection={rowSelection}
      setColumnFilters={setColumnFilters}
      setColumnVisibility={setColumnVisibility}
      setRowSelection={setRowSelection}
      setSorting={setSorting}
    />
  );
};

export default TeachersPage;
