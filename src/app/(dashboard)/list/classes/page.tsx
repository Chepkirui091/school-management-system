import TableSearch from "@/components/@page-components/table-search/page";
import Image from "next/image";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";
import Link from "next/link";
import {classesData, role} from "@/lib/data";

type Classes = {
    id: number;
    name: string;
    capacity: string;
    grade: number;
    supervisor: string;
}

const columns = [
    {
        header: "Class Name", accessor: "name"
    },
    {
        header: "Capacity", accessor: "capacity", classname: "hidden lg:table-cell "
    },
    {
        header: "Grade", accessor: "grade", classname: "hidden lg:table-cell "
    },
    {
        header: "Supervisor", accessor: "supervisor", classname: "hidden lg:table-cell "
    },
    {
        header: "Actions", accessor: "actions"
    }
]

const ClassesListPage = () => {

    const renderRow = (item: Classes) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
                    <h3 className="font-semibold">{item.name}</h3>
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.supervisor}</td>

            <td className="flex gap-2">
                <Link href={`/list/classes/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                        <Image src="/edit.png" alt="" width={16} height={16}/>
                    </button>
                </Link>
                {role === "admin" && (
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                        <Image src="/delete.png" alt="" width={16} height={16}/>
                    </button>
                )}
            </td>
        </tr>
    )


    return (
        <div className="text-black bg-white p-4 rounded-md m-4 flex-1 mt-0">
            {/*TOP*/}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md-w-auto">
                    < TableSearch/>
                </div>
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/filter.png " alt="" width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/sort.png " alt="" width={14} height={14}/>
                    </button>
                    {role === "admin" && (
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/plus.png " alt="" width={14} height={14}/>
                        </button>
                    )}
                </div>
            </div>
            {/*LIST*/}
            <Table columns={columns} renderRow={renderRow} data={classesData}/>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    )
}

export default ClassesListPage