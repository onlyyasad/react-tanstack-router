import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  useReactTable,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { teacherColumns } from "./teacherColumn";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ITeacher, ITeacherResponse } from "@/types/teachers";
import { RegisteredRouter, RouteIds } from "@tanstack/react-router";
import { useFilters } from "@/hooks/useFilters";

interface IProps {
  teachersData: ITeacherResponse;
  columns: ColumnDef<ITeacher>[];
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  columnVisibility: VisibilityState;
  rowSelection: {};
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  setRowSelection: React.Dispatch<React.SetStateAction<{}>>;
  routeId: RouteIds<RegisteredRouter["routeTree"]>;
}

const TeachersTable: React.FC<IProps> = ({
  teachersData,
  columns,
  sorting,
  columnFilters,
  columnVisibility,
  rowSelection,
  setSorting,
  setColumnFilters,
  setColumnVisibility,
  setRowSelection,
  routeId,
}) => {
  const { filters, resetFilters, setFilters } = useFilters(routeId);

  const table = useReactTable({
    data: teachersData.data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: teachersData.pagination.total,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <Select
          onValueChange={(value) => setFilters({ expertise: value })}
          defaultValue={filters.expertise}
          value={filters.expertise}
        >
          <SelectTrigger className="w-[180px] capitalize">
            {/* <SelectValue placeholder={ filters.expertise || "Expertise"} /> */}
            <SelectValue placeholder="Expertise">
              {filters.expertise || "Expertise"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={resetFilters}>Reset Filters</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={teacherColumns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeachersTable;
