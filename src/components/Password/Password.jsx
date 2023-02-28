import React from "react";

import styles from "./Password.module.scss";
import PasswordForm from "../PasswordForm/PasswordForm";
import PasswordBoard from "../PasswordBoard/PasswordBoard";

const Password = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Create random password</h1>
			
			<PasswordBoard/>
			
			<PasswordForm/>
		</div>
	);
};

export default Password;