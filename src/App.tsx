import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="search" element={<SearchResults />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
