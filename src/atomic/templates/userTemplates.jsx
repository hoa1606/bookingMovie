import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

export function UserTemplates() {
  return (
    <div className="w-4/5 mx-auto mt-5 flex justify-between items-center">
      <div>
        <img src="./img/favicon.ico" alt="" />;
      </div>
      <div className="flex gap-6">
        <Link className="underline " to="/">trang chu</Link>
        <Link className="underline border-l-2 border-black pl-6"  to="/lienHe">lien he</Link>
        <Link className="underline border-l-2 border-black pl-6"  to="/tinTuc">tin tuc</Link>
        <Link className="underline border-l-2 border-black pl-6"  to="/ungDung">Ung Dung</Link>
      </div>
      <div className="flex gap-12">
        <button className="border-2 border-black border-solid p-2 rounded-xl">dang nhap</button>
        <button className="border-2 border-black border-solid p-2 rounded-xl">dang ki</button>
      </div>
      <Suspense fallback={<>Loading....</>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
