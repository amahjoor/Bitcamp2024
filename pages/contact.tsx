import Link from 'next/link';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the contact page content.</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default ContactPage;
