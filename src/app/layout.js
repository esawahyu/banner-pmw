import Navbar from "@components/navbar/navbar.js"
import "@styles/global.css"

export const metadata = {
  title: 'Muh Esa Wahyu Pratama Yusuf',
  description: 'Made for PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>{children}
      </body>
    </html>
  )
}
