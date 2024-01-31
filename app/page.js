import Logo from "./components/Logo";
import Nav from "./components/Nav";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

export default function Home() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
        rel="stylesheet"
      />
      <div className="flex justify-between ">
        <div>
          <div className="w-screen">
            <PageOne />
          </div>
          <div className="w-screen">
            <PageTwo />
          </div>
        </div>
        <div className="fixed left-0">
          <Logo />
        </div>
        <div className="fixed right-0">
          <Nav />
        </div>
      </div>
    </main>
  );
}
