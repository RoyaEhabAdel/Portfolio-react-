import './Home.css';

function Home(){
    return(
        <div className="wrapper">
            <div className="staticTxt">I'm</div>
            <ul className="dynamicTxts">
                <li><span></span></li>
            </ul>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png" alt="profile picture" />
        </div>
    )
}
export default Home;