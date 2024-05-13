import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="Footer">
			<p className="Footer-Name">
				Built and designed by{'Wanly Leger '}
			</p>

			<p className="Footer-Technologies">
				Technologies: Node.js, Express, Postgres, React
			</p>
			<p className="Footer-Note">
				No affiliation with Instagram. This is a personal project.
			</p>
		</div>
	);
};

export default Footer;