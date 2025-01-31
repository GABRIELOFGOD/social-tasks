import ActionButton from "@/components/common/buttons/ActionButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-10 px-3 md:px-28 py-10 md:py-20 items-center text-white h-[90vh] justify-center">
      <div className="text-center">
        <p className="font-bold text-8xl text-white uppercase">Social Tasks</p>
        <p className="text-center text-tertiary font-semibold text-2xl">Perform Task and earn in crypto</p>
      </div>
      <Link href="/tasks">
        <ActionButton
          text="Start Tasks"
          className=" py-2 hover:bg-secondary hover:bg-opacity-50 duration-200 bg-tertiary px-4"
          textColor="black"
        />
      </Link>
    </div>
  );
}
