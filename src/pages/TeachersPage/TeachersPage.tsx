import TeachersTable from "./components/TeachersTable";
import React, { useMemo } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { teacherColumns } from "./components/teacherColumn";
import { useGetTeachers } from "@/hooks/useGetTeachers";
import { useFilters } from "@/hooks/useFilters";
import { RegisteredRouter, RouteIds } from "@tanstack/react-router";

const TeachersPage = ({routeId}:{routeId: RouteIds<RegisteredRouter["routeTree"]>}) => {
  
  const { filters, resetFilters, setFilters } = useFilters(routeId);

  console.log("filters", filters)

  // ------ Old ------ //
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // ------ Old ------ //

  const { data: teachersData } = useGetTeachers({ filters });

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
