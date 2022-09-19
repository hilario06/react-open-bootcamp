import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
	theme: 'dark',
	lang: 'es'
};

export default function Settings() {

	const [config, setConfig] = useLocalStorage('config', defaultConfig);

	const handleChange = (event) => {
		event.preventDefault();
		setConfig((oldConfig) => (
			{
				...oldConfig,
				theme: 'light'
			})
		);
	};

	return (
		<div>
			<h1>APP SETTINGS</h1>
			<p>Actual Config: {config}</p>
			<button type='button' onClick={handleChange}>Save New Settings</button>
		</div>
	)
}