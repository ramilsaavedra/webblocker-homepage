import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import banner from '@/public/images/hero-image.png';
import block from '@/public/image/block-sites-icon.svg';
import CTA from 'components/CTA';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web Blocker</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>
            Enhance Your Productivity for Free with Web Blocker – Keep
            Distractions at Bay.
          </h1>
          <p>
            Web Blocker, a <strong>free</strong> Chrome extension, empowers you
            to maintain focus by blocking distracting websites.
          </p>
          <Image src={banner} alt='' />
        </section>
        <section className={styles.features}>
          <h2>Escape Distractions and Boost Productivity</h2>
          <p>
            Online distractions are a constant challenge. To optimize your work
            hours, staying focused is key – a daunting task with countless
            websites vying for your attention.
          </p>
          <div className={styles.featuresWrap}>
            <div className={styles.featureWrap}>
              <svg
                width='70'
                height='70'
                viewBox='0 0 70 70'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='70'
                  height='70'
                  rx='20'
                  fill='#E74C3C'
                  fillOpacity='0.3'
                />
                <path
                  d='M19 41.7778C19 49.4514 25.2284 55.6667 32.9182 55.6667C38.8857 55.6667 44.2268 52.0382 46.4363 46.5174L50.8901 35.3542C51.3251 34.2431 51.2903 32.9583 50.6292 31.9688C49.7767 30.684 48.2631 30.1285 46.8365 30.4931L45.4794 30.8924C44.6791 31.1007 43.9484 31.5 43.3569 32.0382V21.8125C43.3569 19.4167 41.4084 17.4722 39.0075 17.4722C38.6769 17.4722 38.3637 17.4722 38.068 17.5764C37.7026 15.5451 35.928 14 33.7881 14C31.944 14 30.3782 15.1458 29.7344 16.7604C29.3691 16.6563 28.9689 16.6042 28.5688 16.6042C26.1679 16.6042 24.2193 18.5486 24.2193 20.9444V21.8993C23.941 21.8125 23.6452 21.8125 23.3494 21.8125C20.9486 21.8125 19 23.7569 19 26.1528V41.7778ZM22.4796 26.1528C22.4796 25.6667 22.8623 25.2847 23.3494 25.2847C23.8366 25.2847 24.2193 25.6667 24.2193 26.1528V34.8333H27.6989V20.9444C27.6989 20.4583 28.0816 20.0764 28.5688 20.0764C29.0559 20.0764 29.4387 20.4583 29.4387 20.9444V34.8333H32.9182V18.3403C32.9182 17.8542 33.301 17.4722 33.7881 17.4722C34.2753 17.4722 34.658 17.8542 34.658 18.3403V34.8333H38.1376V21.8125C38.1376 21.3264 38.5203 20.9444 39.0075 20.9444C39.4946 20.9444 39.8773 21.3264 39.8773 21.8125V40.0417H43.3569L45.0967 35.7014C45.3577 34.9201 45.9666 34.3299 46.8365 34.1215L47.7064 33.8785L43.2003 45.25C41.5301 49.434 37.4591 52.1944 32.9182 52.1944C27.1596 52.1944 22.4796 47.5243 22.4796 41.7778V26.1528Z'
                  fill='#E74C3C'
                />
              </svg>

              <h3>Block Sites Effortlessly</h3>
              <p>
                Easily block and unblock websites by managing your personalized
                blocklist.
              </p>
            </div>

            <div className={styles.featureWrap}>
              <svg
                width='70'
                height='70'
                viewBox='0 0 70 70'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='70'
                  height='70'
                  rx='20'
                  fill='#00A65A'
                  fillOpacity='0.3'
                />
                <path
                  d='M34.5714 52.0952C30.9468 52.0952 27.4706 50.6554 24.9076 48.0924C22.3446 45.5294 20.9048 42.0532 20.9048 38.4286C20.9048 34.8039 22.3446 31.3278 24.9076 28.7648C27.4706 26.2018 30.9468 24.7619 34.5714 24.7619C38.1961 24.7619 41.6722 26.2018 44.2352 28.7648C46.7982 31.3278 48.2381 34.8039 48.2381 38.4286C48.2381 42.0532 46.7982 45.5294 44.2352 48.0924C41.6722 50.6554 38.1961 52.0952 34.5714 52.0952ZM48.2967 27.4757L51.069 24.7033C50.1905 23.7076 49.3119 22.8095 48.3162 21.9505L45.5438 24.7619C42.5176 22.3019 38.7105 20.8571 34.5714 20.8571C29.9112 20.8571 25.4418 22.7084 22.1466 26.0037C18.8513 29.299 17 33.7683 17 38.4286C17 43.0888 18.8513 47.5582 22.1466 50.8534C25.4418 54.1487 29.9112 56 34.5714 56C44.3333 56 52.1429 48.1319 52.1429 38.4286C52.1429 34.2895 50.6981 30.4824 48.2967 27.4757ZM32.619 40.381H36.5238V28.6667H32.619M40.4286 15H28.7143V18.9048H40.4286V15Z'
                  fill='#00A65A'
                />
              </svg>

              <h3>Set Your Schedule for Site Blocking</h3>
              <p>
                Establish a daily routine by specifying the days and times for
                blocking websites.
              </p>
            </div>
            <div className={styles.featureWrap}>
              <svg
                width='70'
                height='70'
                viewBox='0 0 70 70'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='70'
                  height='70'
                  rx='20'
                  fill='#0073B7'
                  fillOpacity='0.3'
                />
                <path
                  d='M38.5056 29.6667L40.3333 31.4944L22.6778 49.1111H20.8889V47.3222L38.5056 29.6667ZM45.5056 18C45.0194 18 44.5139 18.1944 44.1444 18.5639L40.5861 22.1222L47.8778 29.4139L51.4361 25.8556C52.1944 25.0972 52.1944 23.8333 51.4361 23.1139L46.8861 18.5639C46.4972 18.175 46.0111 18 45.5056 18ZM38.5056 24.2028L17 45.7083V53H24.2917L45.7972 31.4944L38.5056 24.2028Z'
                  fill='#0073B7'
                />
              </svg>

              <h3>Personalized Redirection</h3>
              <p>Direct blocked websites to a custom URL of your choice.</p>
            </div>
          </div>
        </section>
        <section className={styles.ending}>
          <h2>Boost Your Productivity Now</h2>
          <p>
            Web Blocker is your ultimate solution to eliminate distracting
            websites, helping you enter the productivity zone effortlessly.
          </p>
          <CTA />
        </section>
      </main>
      <footer className={styles.footer}>
        <span>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a
            href='https://github.com/ramilsaavedra/webblocker-chrome-v2'
            target='_newtab'
          >
            Web Blocker
          </a>
        </span>
      </footer>
    </>
  );
};

export default Home;
