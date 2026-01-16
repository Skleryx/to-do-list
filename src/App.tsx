import LandingPage from "./pages/LandingPage";

export type Page = "landing" | "todo" | "profile";

export default function App() {
  return <LandingPage navigate={function (page: Page): void {
    console.log("Navigating to:", page);
  } } />;
}
