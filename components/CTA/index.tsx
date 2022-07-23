import styles from './CTA.module.css';

const CTA = () => {
  return (
    <a
      className={styles.headerCTA}
      href='https://chrome.google.com/webstore/detail/web-blocker/hmfcoeeicamgkocaflbdhjjibdlglbfg'
      target='_newtab'
    >
      Add to Chrome
    </a>
  );
};

export default CTA;
