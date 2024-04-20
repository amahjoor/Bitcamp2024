import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page content.</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default AboutPage;
