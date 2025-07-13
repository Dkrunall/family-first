import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Family First',
  description: 'Protect Their World. Control It Silently.',
  icons: {
    icon: [
      { url: '/fav.png', type: 'image/png', sizes: '32x32' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fkrunalsa5304back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.5"></script>
</body>
    </html>
  );
}
