import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AIToolsPage } from './pages/AIToolsPage';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "packages":
        return <PackagesPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "experience":
        return <ExperiencePage />;
      case "blog":
        return <BlogPage />;
      case "blog-post":
        return <BlogPostPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "ai-tools":
        return <AIToolsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-snow text-alpine-dark font-body">
      <SEO page={currentPage} />
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}