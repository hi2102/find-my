import { Route, Routes } from "react-router-dom";

import Main from "../component/pages/Main";
import Feed from "../component/pages/Feed";
import Search from "../component/pages/Search";
import NewPost from "../component/pages/NewPost";
import Dm from "../component/pages/Dm";
import MyPage from "../component/pages/MyPage";

export default function RoutePage() {
  return <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/feed" element={<Feed />}/>
    <Route path="/search" element={<Search />}/>
    <Route path="/new-post" element={<NewPost />}/>
    <Route path="/dm" element={<Dm />}/>
    <Route path="/my-page" element={<MyPage />}/>
  </Routes>
}