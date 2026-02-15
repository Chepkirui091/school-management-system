// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = ({ columns, renderRow, data }: {
  columns: { header: string; accessor: string; className?: string; classname?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="table w-full mt-4 text-card-foreground">
      <thead>
        <tr className="text-left text-muted-foreground text-sm border-b border-border">
          {columns.map((col) => (
            <th scope="col" key={col.accessor} className={`py-3 px-4 font-medium ${col.className ?? col.classname ?? ""}`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
