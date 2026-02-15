export default function ListPageWrapper({
  title,
  children,
  actions,
}: {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        {actions}
      </div>
      {children}
    </div>
  );
}
