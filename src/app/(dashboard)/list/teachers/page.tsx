import TableSearch from "@/components/@page-components/table-search/page";
import Image from "next/image";
import Pagination from "@/components/@shared-components/pagination/page";

const TeacherListPage = () => {
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
            <div className=""></div>
            {/*PAGINATION*/}
                <Pagination />
        </div>
    )
}

export default TeacherListPage