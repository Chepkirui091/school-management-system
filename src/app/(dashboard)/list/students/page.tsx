import TableSearch from "@/components/@page-components/table-search/page";
import Image from "next/image";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";

type Student = {
  id: number;
  studentId: string;
  name: string;
  photo: string;
  phone?: string;
  email?: string;
  grade: string | number;
  class: string;
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Class", accessor: "class", className: "hidden md:table-cell" },
  { header: "Student Id", accessor: "studentId", className: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-border even:bg-muted/30 text-sm hover:bg-lamaPurpleLight/50 dark:hover:bg-white/5 transition-colors"
    >
      <td className="py-3 px-4">
        <div className="flex items-center gap-4">
          <Image
            src={item.photo}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-foreground">{item.name}</h3>
            <p className="text-xs text-muted-foreground">{item.class}</p>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.studentId}</td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.grade}</td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.phone}</td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.address}</td>
      <td className="py-3 px-4">
        <div className="flex gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:opacity-90 transition-opacity"
            >
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:opacity-90 transition-opacity"
            >
              <Image src="/delete.png" alt="Delete" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold">All Students</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-2 justify-end">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button
                type="button"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-lamaYellow hover:opacity-90 transition-opacity"
              >
                <Image src="/plus.png" alt="Add" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
};

export default StudentListPage;
