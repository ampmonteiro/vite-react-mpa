export default function AppLayout({ children }) {
  return (
    <>
      <header>
        <h3>MPA Blog {'<='} Vite + React</h3>
        <nav>
          <a href="/">HOME</a>
          <a href="/about/">ABOUT</a>
        </nav>
      </header>
      <main>{children}</main>

      <footer>
        <p>
          &copy;2023{' '}
          <a
            target={'_blank'}
            href="https://github.com/ampmonteiro/vite-react-mpa"
          >
            AMPM
          </a>
        </p>
        <p>Powered by: React || Developed with: Vite</p>
      </footer>
    </>
  );
}
