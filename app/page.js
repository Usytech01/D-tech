import Rightbar from "./component/Rightbar";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Feed from "./Feed";

export default function Home() {
  return (
    <>
      <Topbar/>
      <main>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </main>
    </>
  );
}
