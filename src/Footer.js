import React, {Component} from 'react';
import './Footer.css';
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class CopyrightComponent extends Component {
  render() {
    return (
      <div className="templatemo_footer">
        Copyright © {new Date().getFullYear()} <a href="#">Jiahang</a>
        <div className="cleaner"></div>
    </div>
    );
  }
}

export default CopyrightComponent;