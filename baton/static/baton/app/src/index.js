// jQuery is provided by webpack provider plugin
import 'bootstrap/dist/js/bootstrap'
import './styles/baton.scss'

import Navbar from 'core/Navbar'
import Footer from 'core/Footer'
import Menu from 'core/Menu'
import ActionResult from 'core/ActionResult'
import PasswordChange from 'core/PasswordChange'
import Analytics from 'core/Analytics'
import Tabs from 'core/Tabs'

window.Baton = {
  init: function (config) {
    console.info('Baton:', 'init')
    let page = this.page()

    Navbar.init()
    if (page !== 'login' && !/_popup/.test(location.search)) {
      Menu.init(config)
    }
    if (page === 'logout' || page === 'password_change_success') {
      ActionResult.init()
    } else if (page === 'password_change') {
      PasswordChange.init()
    }
    Footer.init({
      remove: /_popup/.test(location.search)
    })

    // tabs
    if (page === 'add_form' || page === 'change_form') {
      Tabs.init()
    }
  },
  page: function () {
    if (location.pathname === '/admin/') {
      return 'dashboard'
    } else if (location.pathname === '/admin/login/') {
      return 'login'
    } else if (location.pathname === '/admin/logout/') {
      return 'logout'
    } else if (location.pathname === '/admin/password_change/') {
      return 'password_change'
    } else if (location.pathname === '/admin/password_change/done/') {
      return 'password_change_success'
    } else if (/\/add\//.test(location.pathname)) {
      return 'add_form'
    } else if (/\/change\//.test(location.pathname)) {
      return 'change_form'
    }
  },
  Analytics: Analytics
}
window.jQuery = jQuery