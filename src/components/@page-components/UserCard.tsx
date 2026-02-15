import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] shadow-card hover:shadow-card-hover transition-shadow border border-transparent dark:odd:bg-lamaPurple/80 dark:even:bg-lamaYellow/80 dark:border-white/10">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white/90 dark:bg-black/20 px-2 py-1 rounded-full text-green-600 dark:text-green-400 font-medium">
          2024/25
        </span>
        <button type="button" className="p-1 rounded-full hover:bg-white/20 transition-colors">
          <Image src="/more.png" alt="More" width={20} height={20} />
        </button>
      </div>
      <h2 className="text-2xl font-semibold my-4 text-foreground">1,234</h2>
      <p className="capitalize text-sm font-medium text-muted-foreground">{type}s</p>
    </div>
  );
};

export default UserCard;
