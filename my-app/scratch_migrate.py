import re

# Read source file
with open(r'C:\Users\oghan\OneDrive\Desktop\bloom beauty\bloom beauty\homepage\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace imports
new_imports = '''import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

'''

# Extract icons and components we want
start_idx = content.find('const MenuIcon =')
if start_idx == -1:
    print("Could not find start")
    exit(1)

content = content[start_idx:]

# Remove App component, Footer, Header, SidebarMenu, Navigation, BloomLogo
# Actually we can just keep the components we need. Let's just find them by regex or simple split.
# Or better, let's just keep everything and fix the `App` component at the end.

# Let's remove the SidebarMenu, Header, Navigation, Footer, HeaderMenuApp, FooterSectionApp, BloomLogo
to_remove = [
    r'function SidebarMenu\(\) \{.*?\n\}\n\n',
    r'const BloomLogo = .*?\n\};\n',
    r'function Header\(\) \{.*?\n\}\n',
    r'function Navigation\(\) \{.*?\n\}\n',
    r'function Footer\(\) \{.*?\n\}\n',
    r'function App\(\) \{.*?\n\}\n',
    r'export default App;\n?'
]

for pattern in to_remove:
    content = re.sub(pattern, '', content, flags=re.DOTALL)

# Let's construct the HomePage component
home_page_comp = '''
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroBanner />
        <CategoryIcons />
        <RewardsBanner />
        <NewTrendySection />
        <FilterShopSection />
        <RecommendedSection />
        <MustHaveBrands />
        <FeaturesBar />
      </main>
    </div>
  );
}
'''

# Replace <a> with Link in ProductCard
content = content.replace('<a href={product.href || "#"} aria-label={product.name}>', '<Link to="/product" aria-label={product.name}>')
content = content.replace('<a href={product.href || "#"}>{product.name}</a>', '<Link to="/product">{product.name}</Link>')
content = content.replace('<a\n          href={product.href || "#"}\n          className="block w-full bg-primary text-white py-2.5 text-sm font-medium transform skew-x-[-15deg] hover:bg-primary-600 transition-all"\n        >', '<Link\n          to="/product"\n          className="block w-full bg-primary text-white py-2.5 text-sm font-medium transform skew-x-[-15deg] hover:bg-primary-600 transition-all"\n        >')

# Also closing tags for Link
content = content.replace('</a>', '</Link>')

final_content = new_imports + content + home_page_comp

with open(r'c:\Users\oghan\OneDrive\Desktop\Bloom\my-app\src\components\homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Done")
