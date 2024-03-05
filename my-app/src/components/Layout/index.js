import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;BODY&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          {' '}
          &lt;/BODY&gt;
          <br />
          <span className="bottom-tag-html">&lt;/HTML&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
