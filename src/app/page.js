import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-center flex-col">
      <h1 className="text-[7rem] font-mono">Welcome To Recepie App</h1>
      <Link href={"/recepie-list"}>
      <button class="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">Explore Recepie</button>
      </Link>
    </div>
    );
}
