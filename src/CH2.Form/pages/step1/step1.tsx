import { Link } from 'react-router-dom';
import { menuItems } from '../../config/menu.item';

export default function Step1() {
  return (
    <section aria-label="step1">
      <h2>Step1</h2>
      <Link to={menuItems[1].path}>next</Link>
    </section>
  );
}
