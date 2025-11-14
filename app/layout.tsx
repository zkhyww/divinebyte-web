import "./globals.css"
import { ReactNode } from "react"
import GridScan from "../components/backgrounds/grid-scan"
import LiquidEther from "../components/backgrounds/liquid-ether"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0b1020] text-white">
        <div className="fixed inset-0 -z-10">
          <GridScan linesColor="#392e4e" lineThickness={1} gridScale={0.1} />
          <LiquidEther colors={["#3c0078", "#0096b4"]} />
        </div>
        {children}
      </body>
    </html>
  )
}
