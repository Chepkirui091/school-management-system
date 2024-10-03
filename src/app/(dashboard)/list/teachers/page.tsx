import TableSearch from "@/components/@page-components/table-search/page";
import Image from "next/image";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";
import Link from "next/link";
import {role, teachersData} from "@/lib/data";

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    photo: string;
    phone: string;
    email: string;
    subjects: string[];
    classes: string[];
    address: string;

}

const columns = [
    {
        header: "Info", accessor: "info"
    },
    {
        header: "Teacher Id", accessor: "teacherId", classname: "hidden md:table-cell "
    },
    {
        header: "Email", accessor: "email", classname: "hidden md:table-cell "
    },
    {
        header: "Subjects", accessor: "subjects", classname: "hidden md:table-cell "
    },
    {
        header: "Classes", accessor: "classes", classname: "hidden md:table-cell "
    },
    {
        header: "Phone", accessor: "phone", classname: "hidden lg:table-cell "
    },
    {
        header: "Address", accessor: "address", classname: "hidden lg:table-cell "
    },
    {
        header: "Actions", accessor: "actions"
    }
]

const TeacherListPage = () => {

    const renderRow = (item: Teacher) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <Image src={item.photo} alt="" width={40} height={40}
                       className="md:hidden xl:block w-10 h-10 rounded-full object-cover"/>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.email}</td>
            <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{item.classes.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>

            <td className="flex gap-2">
                <Link href={`/list/teachers/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                        <Image src="/view.png" alt="" width={16} height={16}/>
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
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/plus.png " alt="" width={14} height={14}/>
                    </button>
                </div>
            </div>
            {/*LIST*/}
            <Table columns={columns} renderRow={renderRow} data={teachersData}/>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    )
}

export default TeacherListPage