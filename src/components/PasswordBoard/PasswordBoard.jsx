import React from "react";
import styles from './PasswordBoard.module.scss'
import { useSelector } from "react-redux";

const PasswordBoard = () => {
	const password = useSelector(state => state.password.password);
	
	return (
		<div className={styles.root}>
			{password}
		</div>
	);
};

export default PasswordBoard;