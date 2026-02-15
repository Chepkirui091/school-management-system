const Announcements = () => {
  return (
    <div className="bg-card text-card-foreground p-4 rounded-xl shadow-card border border-border">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-lg">Announcements</h2>
        <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-2">
        <div className="bg-lamaSkyLight dark:bg-lamaSky/20 rounded-lg p-4 border border-border/50">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="font-medium text-foreground">Lorem Ipsum dolor sit amet</h3>
            <span className="text-muted-foreground text-xs bg-card dark:bg-white/10 rounded-md px-2 py-1 shrink-0">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="bg-lamaPurpleLight dark:bg-lamaPurple/20 rounded-lg p-4 border border-border/50">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="font-medium text-foreground">Lorem Ipsum dolor sit amet</h3>
            <span className="text-muted-foreground text-xs bg-card dark:bg-white/10 rounded-md px-2 py-1 shrink-0">
              2024-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="bg-lamaYellowLight dark:bg-lamaYellow/20 rounded-lg p-4 border border-border/50">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="font-medium text-foreground">Lorem Ipsum dolor sit amet</h3>
            <span className="text-muted-foreground text-xs bg-card dark:bg-white/10 rounded-md px-2 py-1 shrink-0">
              2023-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
