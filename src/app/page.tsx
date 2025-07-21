import Image from "next/image";
import Silk from "@/components/silk";
import Button from "@/components/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Silk color="#7b1b02" />
        </div>

        <div className="absolute inset-0 flex-col flex items-center justify-center z-10 px-4 gap-y-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Memereale
          </h1>
          <div className="flex gap-4">
            <Link href="/price" >
            <Button variant="primary">Guarda i Prezzi</Button>
          </Link>
          <Link href="/noi">
            <Button variant="outline">Perché scegliere noi?</Button>
          </Link>
          </div>
        </div>


      </div>

  );
}
