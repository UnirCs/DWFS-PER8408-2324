import './footer.css';
export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<p className="footer-text">© {year} Cinema UNIR.</p>
		</footer>
	);
};
