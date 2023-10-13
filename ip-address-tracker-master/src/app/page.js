import Header from "@/components/Header";
import Info from "@/components/Info";
import { IpProvider } from "@/util/IpContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <IpProvider>
        <Header />
        <Info />
      </IpProvider>
    </main>
  )
}
