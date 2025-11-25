import Footer from "./footer";
import Navbar from "./navbar";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      
      <main className="flex-1 flex flex-col items-center justify-center ">
        {children}
      </main>

      
      <Footer />
    </div>
  );
}
