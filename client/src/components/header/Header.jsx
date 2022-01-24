import "./header.css"

export default function Header() {
  return <div className='header'>
            <div className="headerTitle">
                <span className="headerTitleSm">Testing a Blog</span>
                <span className="headerTitleLg">Test</span>
            </div>
            <img className="headerImg" src="https://images.wallpaperscraft.com/image/single/boat_mountains_lake_135258_1920x1080.jpg" alt="" />
        </div>;
}
