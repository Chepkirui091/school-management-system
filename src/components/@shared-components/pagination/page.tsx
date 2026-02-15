const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-muted-foreground border-t border-border">
      <button
        disabled
        className="py-2 px-4 rounded-lg bg-muted text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-3 py-1.5 rounded-lg bg-lamaSky dark:bg-lamaSky/80 text-foreground font-medium">
          1
        </button>
        <button className="px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">2</button>
        <button className="px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">3</button>
        <span className="px-1">...</span>
        <button className="px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">10</button>
      </div>
      <button className="py-2 px-4 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors disabled:opacity-50">
        Next
      </button>
    </div>
  );
};

export default Pagination;
