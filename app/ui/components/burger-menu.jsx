import "./burger-menu.css";

const BurgerMenuIcon = ({ setIsChecked, isChecked }) => {
	return (
		<label className='burger-menu'>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
		</label>
	);
};

export default BurgerMenuIcon;
