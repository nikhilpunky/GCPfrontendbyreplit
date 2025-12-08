import PageLayout from '../PageLayout';

export default function PageLayoutExample() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gradient">Page Layout Example</h1>
        <p className="text-muted-foreground mt-4">This demonstrates the full page layout with header and footer.</p>
      </div>
    </PageLayout>
  );
}
