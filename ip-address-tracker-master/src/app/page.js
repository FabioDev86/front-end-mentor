import Header from "@/components/Header";
import Info from "@/components/Info";
import Map from "@/components/Map";
import { IpProvider } from "@/util/IpContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <IpProvider>
        <Header />
        <Info />
        <Map />
      </IpProvider>
    </main>
  )
}
