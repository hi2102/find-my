import { Route, Routes } from "react-router-dom";

import Main from '../component/pages/main/Main';
import Feed from '../component/pages/feed/Feed';
import Search from '../component/pages/search/Search';
import NewPost from '../component/pages/new-post/NewPost';
import Dm from '../component/pages/dm/Dm';
import MyPage from '../component/pages/my-page/MyPage';
import Edit from '../component/pages/accounts/Edit'

export default function RoutePage() {
  return <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/feed" element={<Feed />}/>
    <Route path="/search" element={<Search />}/>
    <Route path="/new-post" element={<NewPost />}/>
    <Route path="/dm" element={<Dm />}/>
    <Route path="/my-page" element={<MyPage />}/>
    <Route path="/accounts/edit" element={<Edit />}/>
  </Routes>
}