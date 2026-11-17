import './burger-menu.css'

const BurgerMenuIcon = () => {
  return (
    <label className="burger-menu">
      <input type="checkbox" />
      <span className="sr-only">Toggle navigation menu</span>
    </label>
  )
}

export default BurgerMenuIcon
