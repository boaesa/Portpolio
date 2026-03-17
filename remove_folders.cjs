const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove negative spacing from wrapper
html = html.replace('<div class="flex flex-col -space-y-6 mt-10 pb-20">', '<div class="flex flex-col space-y-12 mt-10 pb-20">');

// 2. Replace UX Design Section
const uxRegex = /<!-- User Experience Design I Section -->[\s\S]*?<div id="ux-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(uxRegex, `<!-- User Experience Design I Section -->
      <section id="ux-design-1" class="bg-[#F5F5F5] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717]">User Experience Design I</h2>
          <p class="text-gray-500 text-[16px]">2026</p>
        </div>
        <div>$1</div>
      </section>`);

// 3. Replace Featured Works Section
const worksRegex = /<!-- Featured Works Section -->[\s\S]*?<div id="works-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(worksRegex, `<!-- Featured Works Section -->
      <section id="works" class="bg-[#EBEBEB] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717]">Featured Works</h2>
          <p class="text-gray-500 text-[16px]">2024 - 2026</p>
        </div>
        <div>$1</div>
      </section>`);

// 4. Replace Profile Section
const profileRegex = /<!-- Profile Section -->[\s\S]*?<div id="profile-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(profileRegex, `<!-- Profile Section -->
      <section id="profile" class="bg-[#E0E0E0] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717]">Profile</h2>
          <p class="text-gray-500 text-[16px]">Lee Boa</p>
        </div>
        <div>$1</div>
      </section>`);

fs.writeFileSync('index.html', html);
