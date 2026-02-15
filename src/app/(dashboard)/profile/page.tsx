import { role } from "@/lib/data";

export default function ProfilePage() {
  return (
    <div className="bg-card text-card-foreground p-4 md:p-6 rounded-xl mx-4 mb-4 mt-0 shadow-card border border-border max-w-2xl">
      <h1 className="text-xl font-semibold mb-6">Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
          <p className="text-foreground">John Doe</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Role</label>
          <p className="text-foreground capitalize">{role}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
          <p className="text-foreground">john.doe@school.edu</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Phone</label>
          <p className="text-foreground">+1 234 567 8900</p>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-lamaSky hover:opacity-90 transition-opacity text-sm font-medium"
        >
          Edit profile
        </button>
      </div>
    </div>
  );
}
