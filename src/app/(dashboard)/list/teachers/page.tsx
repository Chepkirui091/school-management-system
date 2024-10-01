import TableSearch from "@/components/@page-components/table-search/page";
import Image from "next/image";
import Pagination from "@/components/@shared-components/pagination/page";
import Table from "@/components/@page-components/Table/page";

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    photo: string;
    phone: string;
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

    const renderRow = (item:Teacher) => {

    }
    return (
        <div className="text-black bg-white p-4 rounded-md m-4 flex-1 mt-0">
            {/*TOP*/}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md-w-auto">
                    <TableSearch/>
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
            <Table columns = {columns}/>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    )
}

export default TeacherListPage