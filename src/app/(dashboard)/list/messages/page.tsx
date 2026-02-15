import TableSearch from "@/components/@page-components/table-search/page";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";
import { messagesData } from "@/lib/data";

const columns = [
  { header: "From", accessor: "from" },
  { header: "Subject", accessor: "subject", classname: "hidden md:table-cell" },
  { header: "Date", accessor: "date", classname: "hidden lg:table-cell" },
  { header: "Read", accessor: "read" },
  { header: "Actions", accessor: "actions" },
];

export default function MessagesListPage() {
  const renderRow = (item: (typeof messagesData)[0]) => (
    <tr
      key={item.id}
      className={`border-b border-border even:bg-muted/30 text-sm hover:bg-lamaPurpleLight/50 dark:hover:bg-white/5 transition-colors ${!item.read ? "font-medium" : ""}`}
    >
      <td className="py-3 px-4 text-foreground">{item.from}</td>
      <td className="hidden md:table-cell py-3 px-4 text-muted-foreground">{item.subject}</td>
      <td className="hidden lg:table-cell py-3 px-4 text-muted-foreground">{item.date}</td>
      <td className="py-3 px-4">
        <span className={item.read ? "text-muted-foreground text-xs" : "text-lamaSky text-xs"}>
          {item.read ? "Read" : "New"}
        </span>
      </td>
      <td className="py-3 px-4">
        <button type="button" className="text-sm text-lamaSky hover:underline">
          View
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold">Messages</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <TableSearch />
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={messagesData} />
      <Pagination />
    </div>
  );
}
