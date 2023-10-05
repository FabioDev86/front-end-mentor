export default function Info(){
    return(
        <div className="flex">
            <div className="bg-white rounded-l-lg p-10 px-[3rem] text-center ">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">IP ADDRESS</h1>
                <p className="font-bold text-slate-800 text-2xl">192.234.567.123</p>
            </div>
            <div className="bg-white p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">LOCATION</h1>
                <p className="font-bold text-slate-800 text-2xl">Casali del Manco, CS</p>
            </div>
            <div className="bg-white p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">TIMEZONE</h1>
                <p className="font-bold text-slate-800 text-2xl">UTC-05:00</p>
            </div>
            <div className="bg-white rounded-r-lg p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">ISP</h1>
                <p className="font-bold text-slate-800 text-2xl">Casa mia</p>
            </div>
        </div>
    );
}