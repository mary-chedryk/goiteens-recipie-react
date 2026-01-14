import './Dropdown.css';
import React from "react";

export default class Dropdown extends React.Component {
    state = {
        showMenu: false
    };

    handleToggle = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
    };

    render() {
        const { showMenu } = this.state;

        return (
            <div className="Dropdown">
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.handleToggle}
                >
                    {showMenu ? 'Close' : 'Open'}
                </button>

                {showMenu && (
                    <div className="Dropdown__menu">
                        Випадаюче меню
                    </div>
                )}
            </div>
        );
    }
}