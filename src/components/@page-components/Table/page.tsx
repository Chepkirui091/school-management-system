const Table = ({
                   columns,
    renderRow,
    data,

               }: {
    columns: { header: string; accessor: string; classname?: string }[];
    renderRow: (item:any) => React.ReactNode;
    data: any[];
}) => {
    return (
        <>
            <table className="table w-full mt-4">
                <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col) => (
                        <th scope="col" key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>{data.map((item)=>renderRow(item))}</tbody>
            </table>
        </>
    )
}

export default Table