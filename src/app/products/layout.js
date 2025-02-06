export const metadata = {
    title: "Featured products",
  };
  
  export default function ProductsLayout({ children }) {
    return (
      <div className="dark:bg-slate-500 bg-gray-100">
        <div className="max-w-screen-xl mx-auto min-h-svh">{children}</div>
      </div>
    );
  }