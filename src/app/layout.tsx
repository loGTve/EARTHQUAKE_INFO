export const metadata = {
  title: 'GoogleMap',
  description: 'loGTve`s GoogleMap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
