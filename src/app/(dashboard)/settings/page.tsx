export default function SettingsPage() {
  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border max-w-2xl">
      <h1 className="text-xl font-semibold mb-6">Settings</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium text-foreground mb-2">Notifications</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border" defaultChecked />
            <span className="text-sm text-muted-foreground">Email notifications</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer mt-2">
            <input type="checkbox" className="rounded border-border" />
            <span className="text-sm text-muted-foreground">Push notifications</span>
          </label>
        </div>
        <div>
          <h2 className="text-sm font-medium text-foreground mb-2">Language</h2>
          <select className="w-full max-w-xs rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-lamaSky hover:opacity-90 transition-opacity text-sm font-medium"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
