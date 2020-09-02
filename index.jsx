let data =[{id: 1, text: "Hulk", classItem: ""}, 
{id: 2, text: "Mavel", classItem: "logo is-active"},
{id: 3, text: "Venom",classItem: ""},
];

function NavItem(props){
    return (
    <a href="#" className={props.classitem}>{props.items}</a>
    );
}

let wallData =[
    {id:1, img: "./img/hulk-1.jpg"},
    {id:2, img: "./img/venom-1.jpg"},
    {id:3, img: "./img/venom-2.jpg"},
];

function Wallpaper(props) {
    return (
        <article class="wallpaper">
            <img src={props.img} alt="Wallpaper #1" className="wallpaper" />
        </article>
    );
}
function SearchForm(props) {
    return (
        <form >
            <input 
            type="search"
            placeholder="Search"
            value={props.value}
            onChange={props.onChange}
            />
        </form>
    );
}

function App() {
    const [navData, setNavData] = React.useState([
        {id: 1, text:"Hulk", classItem: ""},
        {id: 2, text:"Mavel", classItem: "logo is-active"},
        {id: 3, text:"Venom", classItem: ""},
    ]);
    const [navData, setNavData] = React.useState([
        {id: 1, img: "img/venom-1.jpg"},
        {id: 2, img: "img/hulk-1.jpg"},
        {id: 3, img: "img/venom-2.jpg"},
    ]);
    const [value, setValue] = React.useState("");

    function onChange (e) {
        setValue(e.target.value);
    }
    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="navbar">
                <div>
                    {navData.map(item => <NavItem key={item.id} text={item.text} classItem={item.classItem}/>)}
                </div>
            </nav>
            {/* introductory Content */}
            <header className="header">
                <div className="container">
                    <h1 className="title">Mavel's Fearless</h1>
                    <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
          </p>
          <div className="search-bar">
              <SearchForm value={value} onChange={onChange} />
          </div>

          {/* Sample Wallpaper */}
          <div className="sample-wallpaper">
              {wallData.map(item => <Wallpaper key={item.id} img={item.img} />)}
          </div>
                </div>
            </header>
        </React.Fragment>
    );        
    

}



//         SearchForm(){

//     return (
//         <form>
//             <input type="search" 
//             placeholder="Search" 
//             value={props.value}
//              onChange={onChange}/>

//         </form>
//     );

// function onChange(e){
//     setValue(e.target.value);


// const wallList = wallData.map(item => {return  <WallPaper key={item.id} img={item.img} />});

// const navList =navData.map(item =>
//     <NavItem key={item.id} text={item.text} classItem={item.classItem} />
//     );

// RaectDOM.render(
//     <React.Fragment>{navList}</React.Fragment>,
//     document.getElementById("contain_navitems")
// );

// RaectDOM.render( <SearchForm/>,
//     document.getElementById("contain_search")
// ); 

// RaectDOM.render(
//     <React.Fragment>{wallList}</React.Fragment>,
//     document.getElementById("contain_wallpapers")
// );    
