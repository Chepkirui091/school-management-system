import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full border border-border bg-muted/50 px-3 py-2 focus-within:ring-2 focus-within:ring-lamaPurple/50 focus-within:border-lamaPurple dark:focus-within:ring-lamaSky/30 dark:focus-within:border-lamaSky">
      <Image src="/search.png" alt="" width={14} height={14} className="opacity-70" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground min-w-0"
      />
    </div>
  );
};

export default TableSearch;
