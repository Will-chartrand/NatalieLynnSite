export default function SideBar() {
    return (
      <div className="h-screen absolute md:flex hidden items-center">
          <ul id='sidebar' className='fixed float-left ml-5 h-1/6 flex flex-col'>
              <li>
                  <a href="#about">
                   ⚫
                  </a>
              </li>
              <li>
                  <a href="#skills">
                   ⚫
                  </a>
              </li>
              <li>
                  <a href="#pricing">
                   ⚫
                  </a>
              </li>
              <li>
                  <a href="#contact">
                   ⚫
                  </a>
              </li>
  
          </ul>
      </div>
    );
}
