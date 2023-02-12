export function Footer() {
  const author: string = 'Alejandro Cerezo';
  const brand: string = 'ISDI Coders';
  return (
    <footer>
      <address>
        {author} - {brand}
      </address>
    </footer>
  );
}
