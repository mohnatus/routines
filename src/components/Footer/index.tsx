import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div>
      <Link to='/routines'>List</Link>
			<Link to='/routine/new'>Create</Link>
		</div>
	);
};
