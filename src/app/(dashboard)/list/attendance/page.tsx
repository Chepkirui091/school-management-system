import TableSearch from "@/components/@page-components/table-search/page";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";
import { attendanceData, role } from "@/lib/data";

const columns = [
  { header: "Student", accessor: "studentName" },
  { header: "Class", accessor: "class", classname: "hidden md:table-cell" },
  { header: "Date", accessor: "date", classname: "hidden lg:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const statusColors: Record<string, string> = {
  present: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  absent: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  late: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

export default function AttendanceListPage() {
  const renderRow = (item: (typeof attendanceData)[0]) => (
    <tr
      key={item.id}
      className="border-b border-border even:bg-muted/30 text-sm hover:bg-lamaPurpleLight/50 dark:hover:bg-white/5 transition-colors"
    >
      <td className="py-3 px-4 font-medium text-foreground">{item.studentName}</td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.class}</td>
      <td className="hidden lg:table-cell py-3 px-4 text-muted-foreground">{item.date}</td>
      <td className="py-3 px-4">
        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColors[item.status] ?? ""}`}>
          {item.status}
        </span>
      </td>
      <td className="py-3 px-4">
        <button
          type="button"
          className="text-sm text-lamaSky hover:underline dark:text-lamaSky"
        >
          Edit
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <TableSearch />
          {role === "admin" && (
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-lamaYellow hover:opacity-90 transition-opacity text-sm font-medium"
            >
              + Add
            </button>
          )}
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={attendanceData} />
      <Pagination />
    </div>
  );
}
