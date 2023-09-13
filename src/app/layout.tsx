import { Providers } from './providers';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'mstefanutti',
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
