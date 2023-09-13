import { Providers } from './providers';

export const metadata = {
  title: 'mstefa',
  description: 'Matias Stefanutti personal web site',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
