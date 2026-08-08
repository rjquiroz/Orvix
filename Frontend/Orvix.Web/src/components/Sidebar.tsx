function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">ORVIX</div>

            <nav>
                <a href="#" className="active">
                    Dashboard
                </a>

                <a href="#">My Team</a>
                <a href="#">Players</a>
                <a href="#">Waivers</a>
            </nav>

            <div className="sidebar-bottom">
                <a href="#">Settings</a>
            </div>
        </aside>
    );
}

export default Sidebar;