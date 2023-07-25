/* eslint-disable new-cap */
import "../globals.css"
import React from "react"
import type { Metadata } from "next"
import MenuSideBar from "@/components/molecules/MenuSideBar"
import AcessProvider from "@/context/AuthProvider"
import CategoryProvider from "@/context/CategoryProvider"

export const metadata: Metadata = {
	title: "Finanças - Home",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="flex  h-screen">
				<MenuSideBar />
				<AcessProvider>
					<CategoryProvider>{children}</CategoryProvider>
				</AcessProvider>
			</body>
		</html>
	)
}
