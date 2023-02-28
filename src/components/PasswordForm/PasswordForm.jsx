import React from "react";

import styles from "./PasswordForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLength, changeSettings, setPassword } from "../../store/slices/password";
import { getRandomPassword } from "../../utils/getRandomPassword";

const InputField = () => {
	const dispatch = useDispatch();
	const length = useSelector(state => state.password.filters.length);
	
	const onChangeRange = (e) => {
		dispatch(changeLength(+e.target.value));
	};
	
	return (
		<div className={styles.section}>
			<span className={styles.section__title}>Length: {length}</span>
			
			<div className={styles.field}>
				<input
					className={styles.range}
					type="range"
					min="4"
					max="32"
					value={length}
					onChange={onChangeRange}
				/>
			</div>
		</div>
	);
};

const PasswordForm = () => {
	const dispatch = useDispatch();
	const {length, settings} = useSelector(state => state.password.filters);
	
	
	const onChangeSettings = (filterName) => {
		dispatch(changeSettings({...settings, [filterName]: !settings[filterName]}));
	};
	
	const onClickGenerate = (e) => {
		e.preventDefault();
		
		for (let value of Object.values(settings)) {
			if (!value) {
				return;
			}
		}
		
		const password = getRandomPassword({length, settings});
		dispatch(setPassword(password));
	};
	
	return (
		<form className={styles.root}>
			<InputField/>
			
			<div className={styles.section}>
				<span className={styles.section__title}>Settings:</span>
				
				<div className={styles.field}>
					<label className={styles.label}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={settings.lowerCase}
							onChange={() => onChangeSettings("lowerCase")}
						/>
						lowerCase
						<span className={styles.customCheckbox}>
							<span></span>
						</span>
					</label>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={settings.upperCase}
							onChange={() => onChangeSettings("upperCase")}
						/>
						upperCase
						<span className={styles.customCheckbox}>
							<span></span>
						</span>
					</label>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={settings.numbers}
							onChange={() => onChangeSettings("numbers")}
						/>
						numbers
						<span className={styles.customCheckbox}>
							<span></span>
						</span>
					</label>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={settings.symbols}
							onChange={() => onChangeSettings("symbols")}
						/>
						symbols
						<span className={styles.customCheckbox}>
							<span></span>
						</span>
					</label>
				</div>
			</div>
			
			<button
				className={styles.generate__btn}
				onClick={onClickGenerate}
			>Generate
			</button>
		</form>
	);
};

export default PasswordForm;