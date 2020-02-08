import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	<header class={style.footer}>
		<h1>Jessica Renee</h1>
		<nav>
			<Link activeClassName={style.active} href="/portfolio">Portfolio</Link>
			<Link activeClassName={style.active} href="/praise">Praise</Link>
			<Link activeClassName={style.active} href="/about-me">About Me</Link>
			<Link activeClassName={style.active} href="/contact">Contact</Link>
		</nav>
	</header>
);

export default Footer;
