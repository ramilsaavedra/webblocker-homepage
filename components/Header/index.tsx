import Image from 'next/image';
import logo from '@/public/images/logo-with-name.png';
import styles from './Header.module.css';
import CTA from 'components/CTA';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <Image src={logo} alt='Web Blocker' />
        <CTA />
      </div>
    </header>
  );
};
export default Header;
