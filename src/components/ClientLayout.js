import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main id="main-container" data-scroll-container>
        {children}
      </main>
      <Footer />
    </>
  );
}
