import Rightbar from "./component/Rightbar";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Feed from "./Feed";

export default function Home() {
  return (
    <>
      <Topbar/>
      <main className="flex">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </main>
    </>
  );
}
