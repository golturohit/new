import "../styles/index.scss";
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
